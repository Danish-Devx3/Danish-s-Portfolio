
import React from 'react';
// import GitHubCalendar from 'react-activity-calendar'; // Library not available

const GitHubActivity = () => {
    // Mock data/visual for GitHub Activity if library install fails
    // In a real scenario with the library, we would use <GitHubCalendar username="Danish-Devx3" />

    return (
        <section id="activity" className="py-10">
            <h2 className="text-xl font-bold mb-6 text-neutral-100">GitHub Activity</h2>
            <div className="w-full overflow-hidden bg-neutral-900/50 p-4 rounded-xl border border-neutral-800">
                {/* Fallback visualization or message */}
                <div className="flex flex-col items-center justify-center py-8 text-neutral-500 gap-4">
                    <p>Contribution Graph</p>
                    {/* Simple Grid Simulation */}
                    <div className="flex gap-1 overflow-x-auto max-w-full opacity-50">
                        {Array.from({ length: 20 }).map((_, i) => ( // columns
                            <div key={i} className="flex flex-col gap-1">
                                {Array.from({ length: 7 }).map((_, j) => ( // rows
                                    <div
                                        key={j}
                                        className={`w-3 h-3 rounded-sm ${Math.random() > 0.7 ? 'bg-green-500' : 'bg-neutral-800'}`}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <a href="https://github.com/Danish-Devx3" target="_blank" className="text-xs text-blue-400 hover:underline mt-2">
                        View full history on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GitHubActivity;
