import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("idea");
  const [idea, setIdea] = useState("");
  const [ideaResult, setIdeaResult] = useState("");

  const [audience, setAudience] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [planResult, setPlanResult] = useState("");

  const validateIdea = () => {
    if (!idea.trim()) {
      setIdeaResult("Please enter an idea.");
      return;
    }

    const feedback = [
      "This idea solves a real problem — consider validating demand with surveys.",
      "Strong concept! Next step: identify your target customers.",
      "Competitive space, but you can win with differentiation.",
      "Great niche opportunity. Think about your unique value.",
      "Interesting idea! Research similar products to refine your angle."
    ];

    const randomFeedback = feedback[Math.floor(Math.random() * feedback.length)];
    setIdeaResult(randomFeedback);
  };

  const generatePlan = () => {
    if (!audience || !problem || !solution) {
      setPlanResult("Please complete all fields.");
      return;
    }

    setPlanResult(
      `<h3>Your Mini Business Plan</h3>
      <p><strong>Target Audience:</strong> ${audience}</p>
      <p><strong>Problem:</strong> ${problem}</p>
      <p><strong>Solution:</strong> ${solution}</p>
      <p><em>Next Steps:</em> Validate demand, estimate costs, build an MVP, and test with early users.</p>`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white text-center py-6">
        <h1 className="text-3xl font-bold">Entrepreneur Launchpad</h1>
        <p>Your simple guide to starting a successful business</p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center bg-gray-800">
        {[
          ["idea", "Idea Validator"],
          ["plan", "Business Plan"],
          ["tools", "Tools"],
          ["funding", "Funding"]
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setPage(id)}
            className="text-white py-3 px-5 hover:bg-gray-700 transition"
          >
            {label}
          </button>
        ))}
      </nav>

      <main className="max-w-2xl mx-auto p-6">
        {/* IDEA VALIDATOR */}
        {page === "idea" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Business Idea Validator</h2>
            <div className="bg-white p-5 rounded-xl shadow">
              <textarea
                className="w-full border p-3 rounded"
                rows="4"
                placeholder="Describe your idea..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
              />

              <button
                onClick={validateIdea}
                className="bg-green-600 text-white py-2 px-4 rounded mt-2 hover:bg-green-700"
              >
                Validate Idea
              </button>

              {ideaResult && (
                <div className="bg-gray-100 p-4 rounded mt-4 border" dangerouslySetInnerHTML={{ __html: ideaResult }} />
              )}
            </div>
          </section>
        )}

        {/* BUSINESS PLAN */}
        {page === "plan" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Mini Business Plan Builder</h2>
            <div className="bg-white p-5 rounded-xl shadow">
              <label>Target Audience</label>
              <input className="w-full p-2 border rounded mb-3" value={audience} onChange={(e) => setAudience(e.target.value)} />

              <label>Problem You're Solving</label>
              <textarea className="w-full p-2 border rounded mb-3" rows="3" value={problem} onChange={(e) => setProblem(e.target.value)} />

              <label>Your Solution</label>
              <textarea className="w-full p-2 border rounded mb-3" rows="3" value={solution} onChange={(e) => setSolution(e.target.value)} />

              <button
                onClick={generatePlan}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                Generate Plan
              </button>

              {planResult && (
                <div className="bg-gray-100 p-4 rounded mt-4 border" dangerouslySetInnerHTML={{ __html: planResult }} />
              )}
            </div>
          </section>
        )}

        {/* TOOLS */}
        {page === "tools" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Essential Startup Tools</h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded shadow"><strong>Logo / Branding:</strong> Canva, Looka</div>
              <div className="bg-white p-4 rounded shadow"><strong>Website builders:</strong> Shopify, Wix, WordPress</div>
              <div className="bg-white p-4 rounded shadow"><strong>Marketing:</strong> Meta Ads, Google Ads, Mailchimp</div>
              <div className="bg-white p-4 rounded shadow"><strong>Finance:</strong> QuickBooks, Wave, Stripe</div>
              <div className="bg-white p-4 rounded shadow"><strong>Project Management:</strong> Notion, Trello, Asana</div>
            </div>
          </section>
        )}

        {/* FUNDING */}
        {page === "funding" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Funding Options</h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded shadow"><strong>Bootstrapping:</strong> Use your savings.</div>
              <div className="bg-white p-4 rounded shadow"><strong>Angel Investors:</strong> Good for early-stage.</div>
              <div className="bg-white p-4 rounded shadow"><strong>Venture Capital:</strong> For hyper-growth.</div>
              <div className="bg-white p-4 rounded shadow"><strong>Small Business Loans:</strong> SBA, banks.</div>
              <div className="bg-white p-4 rounded shadow"><strong>Crowdfunding:</strong> Kickstarter, Indiegogo.</div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}