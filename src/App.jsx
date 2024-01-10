import Header from "./components/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import Differences from "./components/Differences.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import {useState} from "react";
import EffectSection from "./components/EffectSection.jsx";

function App() {
    const [tab, setTab] = useState('effect')
    return (
        <>
            <Header/>
            <main>
                <IntroSection/>
                <TabsSection active={tab} onChange={(current) => setTab(current)}/>
                {tab === 'main' &&
                    <>
                        <TeachingSection/>
                        <Differences/>
                    </>
                }
                {tab === 'feedback' &&
                    <>
                        <FeedbackSection/>
                    </>
                }
                {tab === 'effect' &&
                <>
                    <EffectSection/>
                </>
                }

            </main>

        </>
    )
}

export default App
