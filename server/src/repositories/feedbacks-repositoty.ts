export interface feedbackCreateData {
    type: string
    comment: string
    screenshot?: string
}

export interface FeedbackRepository {
    create: (data : feedbackCreateData) => Promise<void>
}