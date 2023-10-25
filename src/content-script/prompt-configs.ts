import { 
    Icon,
    ProjectRoadmapIcon,
    BugIcon,
    CodeReviewIcon,
    CommandPaletteIcon,
    PaintbrushIcon,
    CommentIcon
} from '@primer/octicons-react'

export interface PromptSettings {
    buttonId: string,
    buttonLabel: string,
    buttonIcon: Icon,
    title : string,
    maxCharPrevCells: number,
}

export const promptSettings: Record<string, PromptSettings> = {
    format: {
        buttonId: "ai_ext_format_code",
        buttonLabel : "格式化",
        buttonIcon : PaintbrushIcon,
        title : "ChatGPT - Improve Formatting", 
        maxCharPrevCells: 0,
        
    }, 
    explain: {
        buttonId: "ai_ext_explain_code",
        buttonLabel : "解释",
        buttonIcon : ProjectRoadmapIcon,
        title : "ChatGPT - Explain Code",
        maxCharPrevCells: 1250,
    },
    debug: {
        buttonId: "ai_ext_debug_code",
        buttonLabel : "调试",
        buttonIcon : BugIcon,
        title : "ChatGPT - Debug Code",
        maxCharPrevCells: 500,
    },
    complete: {
        buttonId: "ai_ext_complete_code",
        buttonLabel : "补全",
        buttonIcon : CommandPaletteIcon,
        title : "ChatGPT - Complete Code",
        maxCharPrevCells: 1250,

    },
    review : {
        buttonId: "ai_ext_review_code",
        buttonLabel : "审查",
        buttonIcon : CodeReviewIcon,
        title : "ChatGPT - Code Review",
        maxCharPrevCells: 1250,
    },
    // question : {
    //     buttonId: "ai_ext_question",
    //     buttonLabel : "提问",
    //     buttonIcon : CommentIcon,
    //     title : "ChatGPT - Question",
    //     maxCharPrevCells: 1250,
    // }
}
