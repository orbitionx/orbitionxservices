import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Users, MousePointerClick, Percent, Target, Zap } from "lucide-react";

const industries = [
  { name: "E-commerce", cpc: 1.20, conversion: 2.5 },
  { name: "Real Estate", cpc: 2.80, conversion: 3.2 },
  { name: "Healthcare", cpc: 3.50, conversion: 4.0 },
  { name: "Legal", cpc: 6.50, conversion: 5.5 },
  { name: "SaaS", cpc: 4.20, conversion: 3.8 },
  { name: "Finance", cpc: 5.00, conversion: 4.5 },
  { name: "Education", cpc: 2.00, conversion: 3.0 },
  { name: "Restaurant", cpc: 1.50, conversion: 6.0 },
];

const SliderInput = ({
  label,
  icon: Icon,
  value,
  onChange,
  min,
  max,
  step,
  prefix = "",
  suffix = "",
}: {
  label: string;
  icon: React.ElementType;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-foreground/90">{label}</span>
      </div>
      <span className="text-sm font-bold text-primary tabular-nums">
        {prefix}{value.toLocaleString()}{suffix}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-muted/50 accent-primary hover:accent-primary/80 transition-all"
    />
  </div>
);

const ResultCard = ({
  label,
  value,
  icon: Icon,
  color,
  delay,
  isCurrency = false,
}: {
  label: string;
  value: number | string;
  icon: React.ElementType;
  color: string;
  delay: number;
  isCurrency?: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = typeof value === "number" ? value : 0;

  useEffect(() => {
    const duration = 800;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(numericValue * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [numericValue]);

  const formatted = isCurrency
    ? `$${Math.round(displayValue).toLocaleString()}`
    : Math.round(displayValue).toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative glass rounded-2xl p-5 sm:p-6 text-center gradient-border group hover:bg-card/60 transition-all duration-500"
    >
      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mx-auto mb-3`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 text-foreground">
        {typeof value === "string" ? value : formatted}
      </div>
      <div className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
};

const ROICalculator = () => {
  const [budget, setBudget] = useState(5000);
  const [cpc, setCpc] = useState(2.5);
  const [conversionRate, setConversionRate] = useState(3.5);
  const [saleValue, setSaleValue] = useState(800);
  const [closeRate, setCloseRate] = useState(30);
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const applyIndustry = (index: number) => {
    const ind = industries[index];
    setCpc(ind.cpc);
    setConversionRate(ind.conversionRate);
    setSelectedIndustry(index);
  };

  const results = useMemo(() => {
    const clicks = Math.floor(budget / cpc);
    const leads = Math.floor(clicks * (conversionRate / 100));
    const customers = Math.floor(leads * (closeRate / 100));
    const revenue = customers * saleValue;
    const profit = revenue - budget;
    const roi = budget > 0 ? ((profit / budget) * 100) : 0;
    const roas = budget > 0 ? (revenue / budget) : 0;
    const costPerLead = leads > 0 ? (budget / leads) : 0;
    const costPerAcquisition = customers > 0 ? (budget / customers) : 0;

    return {
      clicks,
      leads,
      customers,
      revenue,
      profit,
      roi,
      roas,
      costPerLead,
      costPerAcquisition,
    };
  }, [budget, cpc, conversionRate, saleValue, closeRate]);

  const roiColor = results.roi >= 200 ? "bg-emerald-500" : results.roi >= 50 ? "bg-primary" : results.roi >= 0 ? "bg-amber-500" : "bg-destructive";
  const roiText = results.roi >= 200 ? "Outstanding" : results.roi >= 50 ? "Strong" : results.roi >= 0 ? "Break-even" : "Losing money";

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6" id="roi-calculator">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4"
          >
            Free Tool
          </motion.p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Google Ads <span className="gradient-text">ROI Calculator</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            See exactly how much revenue your Google Ads could generate. Adjust the sliders and discover your potential return.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass rounded-2xl p-6 sm:p-8 gradient-border space-y-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">Your Inputs</h3>
            </div>

            {/* Industry Quick Pick */}
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                Quick Pick Industry
              </label>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind, i) => (
                  <button
                    key={ind.name}
                    onClick={() => applyIndustry(i)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedIndustry === i
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {ind.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <SliderInput
                label="Monthly Ad Budget"
                icon={DollarSign}
                value={budget}
                onChange={setBudget}
                min={500}
                max={50000}
                step={500}
                prefix="$"
              />
              <SliderInput
                label="Avg. Cost Per Click"
                icon={MousePointerClick}
                value={cpc}
                onChange={setCpc}
                min={0.5}
                max={20}
                step={0.1}
                prefix="$"
              />
              <SliderInput
                label="Landing Page Conversion"
                icon={Target}
                value={conversionRate}
                onChange={setConversionRate}
                min={0.5}
                max={25}
                step={0.1}
                suffix="%"
              />
              <SliderInput
                label="Avg. Sale / Job Value"
                icon={DollarSign}
                value={saleValue}
                onChange={setSaleValue}
                min={50}
                max={10000}
                step={50}
                prefix="$"
              />
              <SliderInput
                label="Lead to Customer Close Rate"
                icon={Users}
                value={closeRate}
                onChange={setCloseRate}
                min={5}
                max={80}
                step={1}
                suffix="%"
              />
            </div>
          </motion.div>

          {/* Results Panel */}
          <div className="lg:col-span-3 space-y-6">
            {/* ROI Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6 sm:p-8 gradient-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                    Projected ROI
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={results.roi}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight"
                    >
                      <span className={results.roi >= 0 ? "text-primary" : "text-destructive"}>
                        {results.roi >= 0 ? "+" : ""}{results.roi.toFixed(0)}%
                      </span>
                    </motion.div>
                  </AnimatePresence>
                  <div className={`inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-semibold text-white ${roiColor}`}>
                    <TrendingUp className="w-3 h-3" />
                    {roiText}
                  </div>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-2">
                  <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                    Projected Revenue
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={results.revenue}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-accent"
                    >
                      ${results.revenue.toLocaleString()}
                    </motion.div>
                  </AnimatePresence>
                  <div className="text-xs text-muted-foreground">
                    on ${budget.toLocaleString()} spent
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6 relative h-3 rounded-full bg-muted/50 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((results.roas / 10) * 100, 100)}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-muted-foreground uppercase tracking-wider">
                <span>0x ROAS</span>
                <span>5x ROAS</span>
                <span>10x+ ROAS</span>
              </div>
            </motion.div>

            {/* Result Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <ResultCard
                label="Monthly Clicks"
                value={results.clicks}
                icon={MousePointerClick}
                color="bg-primary"
                delay={0.1}
              />
              <ResultCard
                label="Leads Generated"
                value={results.leads}
                icon={Users}
                color="bg-secondary"
                delay={0.2}
              />
              <ResultCard
                label="New Customers"
                value={results.customers}
                icon={Target}
                color="bg-accent"
                delay={0.3}
              />
              <ResultCard
                label="Cost Per Lead"
                value={results.costPerLead}
                icon={DollarSign}
                color="bg-amber-500"
                delay={0.4}
                isCurrency
              />
              <ResultCard
                label="Cost Per Acquisition"
                value={results.costPerAcquisition}
                icon={Percent}
                color="bg-emerald-500"
                delay={0.5}
                isCurrency
              />
              <ResultCard
                label="ROAS"
                value={`${results.roas.toFixed(1)}x`}
                icon={Zap}
                color="bg-purple-500"
                delay={0.6}
              />
            </div>

            {/* Insight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-2xl p-5 sm:p-6 gradient-border"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold mb-1">The Math Behind It</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    With <span className="text-foreground font-medium">${budget.toLocaleString()}</span> at ${cpc}/click, you get <span className="text-foreground font-medium">{results.clicks.toLocaleString()} clicks</span>. At a <span className="text-foreground font-medium">{conversionRate}%</span> conversion rate, that yields <span className="text-foreground font-medium">{results.leads.toLocaleString()} leads</span>. Closing <span className="text-foreground font-medium">{closeRate}%</span> of them at <span className="text-foreground font-medium">${saleValue.toLocaleString()}</span> each = <span className="text-primary font-bold">${results.revenue.toLocaleString()}</span> in revenue.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
