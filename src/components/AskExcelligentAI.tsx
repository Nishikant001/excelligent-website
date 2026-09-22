import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RotateCcw, Send, Sparkles, X } from "lucide-react";

import {
  answerFor,
  assistantGreeting,
  contactHref,
  findTopic,
  suggestedQuestions,
  type AssistantTopic,
} from "@/data/aiAssistant";

interface Turn {
  question: string;
  topic: AssistantTopic;
}

// "Ask Excelligent AI ✦" — replaces the standard "Chat with us" bubble. It
// opens with "What are you trying to solve?", offers suggested questions,
// answers with what Excelligent offers, and finishes with "Talk to an Expert →"
// (which pre-fills the contact form). Rule-based today; see data/aiAssistant.ts.
export function AskExcelligentAI() {
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [thinking, setThinking] = useState(false);
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number>();

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [turns, thinking]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function ask(question: string, topic?: string) {
    const q = question.trim();
    if (!q || thinking) return;
    setThinking(true);
    setDraft("");
    setTurns((t) => [...t, { question: q, topic: topic ? findTopic(topic) : answerFor(q) }]);
    timer.current = window.setTimeout(() => setThinking(false), 550);
  }

  function reset() {
    window.clearTimeout(timer.current);
    setTurns([]);
    setThinking(false);
    setDraft("");
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Ask Excelligent AI"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 flex h-[min(34rem,calc(100svh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-white/10 bg-midnight-800 text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-primary/30 to-violet/30 px-5 py-4">
              <p className="flex items-center gap-2 font-display text-base font-bold">
                <Sparkles className="h-4 w-4 text-secondary-light" aria-hidden="true" /> Ask Excelligent AI
              </p>
              <div className="flex items-center gap-1">
                {turns.length > 0 && (
                  <button type="button" onClick={reset} aria-label="Start over" className="rounded-md p-1.5 text-white/70 hover:bg-white/10 hover:text-white">
                    <RotateCcw className="h-4 w-4" />
                  </button>
                )}
                <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="rounded-md p-1.5 text-white/70 hover:bg-white/10 hover:text-white">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 text-sm" aria-live="polite">
              <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-base font-medium">{assistantGreeting}</p>

              {turns.length === 0 && (
                <ul className="flex flex-col gap-2">
                  {suggestedQuestions.map((s) => (
                    <li key={s.text}>
                      <button
                        type="button"
                        onClick={() => ask(s.text, s.topic)}
                        className="w-full rounded-xl border border-secondary-light/30 bg-secondary-light/5 px-4 py-2.5 text-left text-white/90 transition-colors hover:border-secondary-light/70 hover:bg-secondary-light/10"
                      >
                        “{s.text}”
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {turns.map((t, i) => {
                const last = i === turns.length - 1;
                return (
                  <div key={i} className="space-y-3">
                    <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-primary to-violet px-4 py-2.5">{t.question}</p>
                    {!(last && thinking) && (
                      <div className="max-w-[92%] space-y-3 rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3.5">
                        <p className="font-semibold">{t.topic.summary}</p>
                        <ul className="space-y-1.5 text-white/75">
                          {t.topic.points.map((p) => (
                            <li key={p} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary-light" aria-hidden="true" />
                              {p}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                          {t.topic.links.map((l) => (
                            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="text-secondary-light underline-offset-2 hover:underline">
                              {l.label}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to={contactHref(t.topic, t.question)}
                          onClick={() => setOpen(false)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-midnight hover:bg-secondary-light"
                        >
                          Talk to an Expert <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    )}
                    {last && thinking && (
                      <p className="w-fit rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-white/60" aria-label="Thinking">
                        <span className="inline-flex gap-1">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60" />
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60 [animation-delay:150ms]" />
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60 [animation-delay:300ms]" />
                        </span>
                      </p>
                    )}
                  </div>
                );
              })}
              <div ref={endRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(draft);
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <label htmlFor="ask-ai-input" className="sr-only">Describe what you are trying to solve</label>
              <input
                id="ask-ai-input"
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                maxLength={300}
                placeholder="Describe what you need…"
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-secondary-light focus:outline-none"
              />
              <button type="submit" aria-label="Send" disabled={!draft.trim() || thinking} className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-violet text-white disabled:opacity-40">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="ml-auto flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-violet px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(124,92,255,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
      >
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        Ask Excelligent AI
        <span aria-hidden="true">✦</span>
      </button>
    </div>
  );
}
