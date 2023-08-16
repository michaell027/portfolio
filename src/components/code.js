export default function Code() {
    const tab = `\u0009`;

    return (
        <div className="p-6 ml-64">
            <div className="mockup-code bg-base-content text-base-100 mt-24">
                <pre data-prefix="1"><code><span className="text-animation">{"{"}</span></code></pre>
                <pre data-prefix="2">{tab}<code><span className="text-animation">{"\"education\": ["}</span></code></pre>
                <pre data-prefix="3">{tab}{tab}<code><span className="text-animation">{"{"}</span></code></pre>
                <pre data-prefix="4">{tab}{tab}{tab}<code><span className="text-animation">{"\"school\": \"Kosice academy of software development\","}</span></code></pre>
                <pre data-prefix="5">{tab}{tab}{tab}<code><span className="text-animation">{"\"years\": \"2022-now\","}</span></code></pre>
                <pre data-prefix="6">{tab}{tab}{tab}<code><span className="text-animation">{"\"program\": \"Computer systems\""}</span></code></pre>
                <pre data-prefix="7">{tab}{tab}<code><span className="text-animation">{"},"}</span></code></pre>
                <pre data-prefix="8">{tab}{tab}<code><span className="text-animation">{"{"}</span></code></pre>
                <pre data-prefix="9">{tab}{tab}{tab}<code><span className="text-animation">{"\"school\": \"Grammar school of St. Thomas Aquinas\","}</span></code></pre>
                <pre data-prefix="10">{tab}{tab}{tab}<code><span className="text-animation">{"\"years\": \"2018-2022\","}</span></code></pre>
                <pre data-prefix="11">{tab}{tab}{tab}<code><span className="text-animation">{"\"graduation_subjects\": ["}</span></code></pre>
                <pre data-prefix="12">{tab}{tab}{tab}{tab}<code><span className="text-animation">{"\"Slovak language\","}</span></code></pre>
                <pre data-prefix="13">{tab}{tab}{tab}{tab}<code><span className="text-animation">{"\"English language\","}</span></code></pre>
                <pre data-prefix="14">{tab}{tab}{tab}{tab}<code><span className="text-animation">{"\"economics\","}</span></code></pre>
                <pre data-prefix="15">{tab}{tab}{tab}{tab}<code><span className="text-animation">{"\"informatics\""}</span></code></pre>
                <pre data-prefix="16">{tab}{tab}{tab}<code><span className="text-animation">{"]"}</span></code></pre>
                <pre data-prefix="17">{tab}{tab}<code><span className="text-animation">{"}"}</span></code></pre>
                <pre data-prefix="18">{tab}<code><span className="text-animation">{"]"}</span></code></pre>
                <pre data-prefix="19"><code><span className="text-animation">{"}"}</span></code></pre>
            </div>
        </div>
    )
}