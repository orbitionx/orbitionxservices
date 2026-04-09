import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section className="relative py-32 px-6" id="contact">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px]" />

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to supercharge your business? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 gradient-border space-y-6"
        >
          <div>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-background/50 border-border/50 h-12 rounded-xl placeholder:text-muted-foreground/50 focus-visible:ring-primary/50"
            />
            {errors.name && <p className="text-destructive text-sm mt-1.5">{errors.name}</p>}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-background/50 border-border/50 h-12 rounded-xl placeholder:text-muted-foreground/50 focus-visible:ring-primary/50"
            />
            {errors.email && <p className="text-destructive text-sm mt-1.5">{errors.email}</p>}
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-background/50 border-border/50 rounded-xl placeholder:text-muted-foreground/50 focus-visible:ring-primary/50 resize-none"
            />
            {errors.message && <p className="text-destructive text-sm mt-1.5">{errors.message}</p>}
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={sending}
            className="w-full h-13 text-base font-semibold glow-blue rounded-full bg-primary hover:bg-primary/90"
          >
            {sending ? "Sending..." : "Send Message"}
            {!sending && <Send className="ml-2 w-4 h-4" />}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
