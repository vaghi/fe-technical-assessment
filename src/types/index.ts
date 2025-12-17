export enum WorkflowType {
  WORKFLOW = 'Workflow',
  AGENT = 'Agent',
  CONTENT = 'Content',
  DATA_PROCESSING = 'Data Processing',
}

export interface Workflow {
    id: string;
    type: WorkflowType;
    name: string;
    tags: TagData[];
    lastUpdated: string;
    icon: string;
}


export interface TagData {
  label: string;
  color?: string;
}
