import {create} from 'zustand';

type ChatState = {
    edlevel: Array<string | null>;
    prompt: string
    companion: string
    companion1: string
    companion2: string
    companion3: string
    companion4: string
    introActive: boolean
    debugActive: boolean
    multiActive: boolean
    aiModel: string
}

type Action = {
    updateEdlevel: (edLevel: ChatState['edlevel']) => void;
    updatePrompt: (prompt: ChatState['prompt']) => void;
    updateCompanion: (companion: ChatState['companion']) => void;
    updateCompanion1: (companion1: ChatState['companion1']) => void;
    updateCompanion2: (companion2: ChatState['companion2']) => void;
    updateCompanion3: (companion3: ChatState['companion3']) => void;
    updateCompanion4: (companion4: ChatState['companion4']) => void;
    updateIntroActive: (introActive: ChatState['introActive']) => void;
    updateDebugActive: (debugActive: ChatState['debugActive']) => void;
    updateMultiActive: (multiActive: ChatState['multiActive']) => void;
    updateAiModel: (aiModel: ChatState['aiModel']) => void;
}

export const useChatStore = create<ChatState & Action>((set) => ({
    edlevel: [],
    prompt: '',
    companion: 'ผู้ช่วยครู',
    companion1: 'ผู้ช่วยครู',
    companion2: 'ครูสอนภาษาอังกฤษ',
    companion3: 'นักวิชาการ',
    companion4: 'ผู้สร้างเนื้อหาการศึกษา',
    introActive: false,
    debugActive: true,
    multiActive: false,
    aiModel: 'gpt-3.5-turbo-1106',
    updateEdlevel: (edLevel) => set({edlevel: edLevel}),
    updatePrompt: (prompt) => set({prompt: prompt}),
    updateCompanion: (companion) => set({companion: companion}),
    updateCompanion1: (companion1) => set({companion1: companion1}),
    updateCompanion2: (companion2) => set({companion2: companion2}),
    updateCompanion3: (companion3) => set({companion3: companion3}),
    updateCompanion4: (companion4) => set({companion4: companion4}),
    updateIntroActive: (introActive) => set({introActive: introActive}),
    updateDebugActive: (debugActive) => set({debugActive: debugActive}),
    updateMultiActive: (multiActive) => set({multiActive: multiActive}),
    updateAiModel: (aiModel) => set({aiModel: aiModel}),
    
}))
