import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { destinations } from "@/data/destinations";

const THEMES = [
  "Beach",
  "Nature & Wildlife",
  "Educational Visit",
  "Heritage",
  "Leisure & Lifestyle",
  "Food",
  "Spirituality",
  "Corporate Workcation",
  "Must See Spots",
];

const Plan = () => {
  const [days, setDays] = useState(5);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [month, setMonth] = useState("");
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>(destinations[0]?.id || "");
  const [itinerary, setItinerary] = useState<string[] | null>(null);

  const toggleTheme = (theme: string) => {
    setSelectedThemes((prev) =>
      prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Very simple itinerary generator: allocate days across selected themes
    const daysPerTheme = Math.max(1, Math.floor(days / Math.max(1, selectedThemes.length)));
    const generated: string[] = [];
    for (let i = 0; i < days; i++) {
      const theme = selectedThemes[i % Math.max(1, selectedThemes.length)] || "Relaxation";
      generated.push(`Day ${i + 1}: Focus on ${theme}`);
    }
    setItinerary(generated);
  };

  const selectedDestination = destinations.find((d) => d.id === selectedDestinationId) || null;

  const parseBaseDays = (duration: string) => {
    const m = duration.match(/(\d+)\s*Days/i);
    return m ? Number(m[1]) : 1;
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">Plan Your Itinerary</h1>
          <div className="grid lg:grid-cols-3 gap-8">
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-card rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <label className="block font-semibold text-foreground mb-2">Days of Travel</label>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-right text-muted-foreground">{days} day{days > 1 ? "s" : ""}</div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Select Travel Theme</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {THEMES.map((theme) => (
                    <label key={theme} className="flex items-center gap-3 text-sm">
                      <input
                        type="checkbox"
                        checked={selectedThemes.includes(theme)}
                        onChange={() => toggleTheme(theme)}
                        className="h-4 w-4"
                      />
                      <span>{theme}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-foreground mb-2">Select Destination</label>
                <select
                  value={selectedDestinationId}
                  onChange={(e) => setSelectedDestinationId(e.target.value)}
                  className="w-full rounded-lg p-3 bg-background border border-border mb-4"
                >
                  {destinations.map((d) => (
                    <option key={d.id} value={d.id}>{d.title}</option>
                  ))}
                </select>

                <label className="block font-semibold text-foreground mb-2">Select Travel Month</label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full rounded-lg p-3 bg-background border border-border"
                >
                  <option value="">Select Travel Month</option>
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <Button type="submit" variant="hero" size="lg" className="w-full">Submit</Button>
              </div>
            </form>

            <aside className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="rounded-md bg-muted p-4 mb-4">Ready to explore? Start planning by selecting your travel options.</div>

              <div className="mb-4">
                <h4 className="font-semibold">Summary</h4>
                <p className="text-sm text-muted-foreground mt-2">Days: {days}</p>
                <p className="text-sm text-muted-foreground">Month: {month || "—"}</p>
                <p className="text-sm text-muted-foreground">Themes: {selectedThemes.length ? selectedThemes.join(", ") : "—"}</p>
                {selectedDestination ? (
                  <div className="mt-3 flex items-start gap-3">
                    <img src={selectedDestination.image} alt={selectedDestination.title} className="w-20 h-16 rounded-md object-cover flex-shrink-0" />
                    <div>
                      <div className="font-semibold">{selectedDestination.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {days} Day{days > 1 ? "s" : ""} / {Math.max(0, days - 1)} Night{days - 1 !== 1 ? "s" : ""} • ₹{
                          Math.max(0, Math.round((selectedDestination.price / Math.max(1, parseBaseDays(selectedDestination.duration))) * days)).toLocaleString()
                        }
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div>
                <h4 className="font-semibold mb-2">Generated Itinerary</h4>
                {itinerary ? (
                  <ul className="space-y-2 text-sm">
                    {itinerary.map((item, idx) => (
                      <li key={idx} className="p-2 bg-background rounded">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">Submit the form to generate a suggested itinerary tailored to your selections.</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Plan;
