export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

type Table<Row, Insert, Update = Partial<Insert>> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
};

export type Database = {
  public: {
    Tables: {
      documents: Table<
        { id: string; user_id: string; title: string; file_name: string; mime_type: string; storage_path: string | null; status: string; metadata: Json; created_at: string; updated_at: string },
        { id?: string; user_id: string; title: string; file_name: string; mime_type: string; storage_path?: string | null; status?: string; metadata?: Json; created_at?: string; updated_at?: string }
      >;
      document_chunks: Table<
        { id: string; document_id: string; user_id: string; chunk_index: number; content: string; embedding: string | null; metadata: Json; created_at: string },
        { id?: string; document_id: string; user_id: string; chunk_index: number; content: string; embedding?: string | null; metadata?: Json; created_at?: string }
      >;
      topics: Table<
        { id: string; user_id: string; name: string; description: string | null; created_at: string; updated_at: string },
        { id?: string; user_id: string; name: string; description?: string | null; created_at?: string; updated_at?: string }
      >;
      quizzes: Table<
        { id: string; user_id: string; topic_id: string | null; title: string; status: string; created_at: string; updated_at: string },
        { id?: string; user_id: string; topic_id?: string | null; title: string; status?: string; created_at?: string; updated_at?: string }
      >;
      questions: Table<
        { id: string; quiz_id: string; user_id: string; prompt: string; question_type: string; choices: Json; explanation: string | null; position: number; created_at: string },
        { id?: string; quiz_id: string; user_id: string; prompt: string; question_type?: string; choices?: Json; explanation?: string | null; position?: number; created_at?: string }
      >;
      attempts: Table<
        { id: string; quiz_id: string; user_id: string; started_at: string; completed_at: string | null; score: number | null },
        { id?: string; quiz_id: string; user_id: string },
        { completed_at?: string | null }
      >;
      answers: Table<
        { id: string; attempt_id: string; question_id: string; quiz_id: string; user_id: string; answer_text: string | null; is_correct: boolean | null; created_at: string },
        { id?: string; attempt_id: string; question_id: string; quiz_id: string; user_id: string; answer_text?: string | null },
        { answer_text?: string | null }
      >;
      revision_tasks: Table<
        { id: string; user_id: string; topic_id: string | null; document_id: string | null; title: string; details: string | null; status: string; due_at: string | null; completed_at: string | null; created_at: string; updated_at: string },
        { id?: string; user_id: string; topic_id?: string | null; document_id?: string | null; title: string; details?: string | null; status?: string; due_at?: string | null; completed_at?: string | null; created_at?: string; updated_at?: string }
      >;
    };
    Views: Record<string, never>;
    Functions: {
      match_document_chunks: {
        Args: { query_embedding: string; match_threshold?: number; match_count?: number };
        Returns: { chunk_id: string; document_id: string; content: string; similarity: number }[];
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
