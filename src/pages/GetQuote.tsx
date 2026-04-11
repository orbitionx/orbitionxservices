import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Send, Building2, User, Mail, Phone, Globe, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "custom-ai-agents", label: "Custom AI Agents" },
  { id: "ai-customer-service", label: "AI Customer Service" },
  { id: "ai-calling-agents", label: "AI Calling Agents" },
  { id: "performance-marketing", label: "Performance Marketing" },
  { id: "website-development", label: "Website Development" },
  { id: "branding-creatives", label: "Branding & Creatives" },
  { id: "shopify-store", label: "Shopify Store Setup" },
  { id: "wordpress", label: "WordPress Development" },
  { id: "seo", label: "SEO & Organic Growth" },
];

const budgetRanges = [
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];

const GetQuote = () => {
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    budget: "",
    problem: "",
    goals: "",
  });

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.problem.trim() || selectedServices.length === 0) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }

    // Build mailto or WhatsApp message
    const selectedLabels = services
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => s.label)
      .join(", ");

    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Website: ${formData.website}
Budget: ${formData.budget}
Services: ${selectedLabels}
Problem: ${formData.problem}
Goals: ${formData.goals}`;

    const mailtoLink = `mailto:muaazahmadn@gmail.com?subject=${encodeURIComponent(
      `Quote Request from ${formData.name}`
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");

    toast({ title: "Opening your email client…", description: "Your quote request is ready to send." });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Free Evaluation
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get a <span className="gradient-text">Quote</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            Tell us about your business and challenges. We'll craft a custom strategy and quotation tailored to your goals.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-10"
        >
          {/* Personal Info */}
          <div className="glass rounded-2xl p-8 gradient-border space-y-6">
            <h3 className="font-display text-xl font-semibold flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> Your Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" placeholder="+1 234 567 8900" value={formData.phone} onChange={handleChange} maxLength={20} />
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="glass rounded-2xl p-8 gradient-border space-y-6">
            <h3 className="font-display text-xl font-semibold flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" /> Company Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" name="company" placeholder="Acme Inc." value={formData.company} onChange={handleChange} maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input id="website" name="website" placeholder="https://example.com" value={formData.website} onChange={handleChange} maxLength={200} />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="glass rounded-2xl p-8 gradient-border space-y-6">
            <h3 className="font-display text-xl font-semibold flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" /> Services You Need *
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <label
                  key={service.id}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedServices.includes(service.id)
                      ? "border-primary/50 bg-primary/5"
                      : "border-border/30 hover:border-border/60"
                  }`}
                >
                  <Checkbox
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={() => toggleService(service.id)}
                  />
                  <span className="text-sm font-medium">{service.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="glass rounded-2xl p-8 gradient-border space-y-6">
            <h3 className="font-display text-xl font-semibold flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" /> Budget Range
            </h3>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-xl border border-border/30 bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Select a budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Problem & Goals */}
          <div className="glass rounded-2xl p-8 gradient-border space-y-6">
            <h3 className="font-display text-xl font-semibold flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" /> Tell Us More
            </h3>
            <div className="space-y-2">
              <Label htmlFor="problem">What problem are you facing? *</Label>
              <Textarea
                id="problem"
                name="problem"
                placeholder="Describe the main challenges your business is experiencing…"
                value={formData.problem}
                onChange={handleChange}
                rows={4}
                maxLength={1000}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goals">What are your goals?</Label>
              <Textarea
                id="goals"
                name="goals"
                placeholder="What outcomes would you like to achieve? (e.g., 2x revenue, automate support, launch new store)"
                value={formData.goals}
                onChange={handleChange}
                rows={4}
                maxLength={1000}
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 text-base font-semibold glow-blue rounded-full bg-primary hover:bg-primary/90"
          >
            Submit Quote Request
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default GetQuote;
