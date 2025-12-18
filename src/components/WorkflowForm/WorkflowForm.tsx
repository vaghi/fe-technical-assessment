import React from 'react';
import { TagSelector } from '@components/TagSelector/TagSelector';
import { TagData, WorkflowType } from '@types';
import { AVAILABLE_ICONS } from '@constants/formOptions';
import { SpreadsheetIcon } from '@assets/SpreadsheetIcon';

interface WorkflowFormProps {
    name: string;
    type: string;
    icon: string;
    tags: TagData[];
    onNameChange: (name: string) => void;
    onTypeChange: (type: string) => void;
    onIconChange: (icon: string) => void;
    onTagsChange: (tags: TagData[]) => void;
    onSave: () => void;
    onCancel: () => void;
}

export const WorkflowForm: React.FC<WorkflowFormProps> = ({
    name,
    type,
    icon,
    tags,
    onNameChange,
    onTypeChange,
    onIconChange,
    onTagsChange,
    onSave,
    onCancel
}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => onNameChange(e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="e.g. Content Generation Workflow"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Type</label>
                <div className="relative">
                    <select
                        value={type}
                        onChange={(e) => onTypeChange(e.target.value)}
                        className="w-full h-10 px-3 appearance-none bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-8"
                    >
                        {(Object.values(WorkflowType) as string[]).map((t) => (
                            <option key={t} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                    <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Icon Selector */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Icon</label>
                <div className="flex gap-3">
                    {AVAILABLE_ICONS.map((iconName) => (
                        <button
                            key={iconName}
                            onClick={() => onIconChange(iconName)}
                            className={`w-10 h-10 flex items-center justify-center rounded-md border transition-all ${icon === iconName
                                ? 'border-primary bg-primary-light ring-1 ring-primary'
                                : 'border-stroke-primary bg-white hover:bg-gray-50'
                                }`}
                            aria-label={`Select ${iconName} icon`}
                        >
                            {iconName === 'spreadsheet' && <SpreadsheetIcon className="w-5 h-5" />}
                            {iconName === 'document' && <span className="text-xl">📄</span>}
                            {iconName === 'apple' && <span className="text-xl">🍎</span>}
                            {iconName === 'bulb' && <span className="text-xl">💡</span>}
                            {iconName === 'pencil' && <span className="text-xl">✏️</span>}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Tags</label>
                <TagSelector
                    selectedTags={tags}
                    onChange={onTagsChange}
                />
            </div>

            <div className="flex justify-end gap-3 pt-4">
                <button
                    onClick={onCancel}
                    className="px-3 py-2 border border-stroke-primary text-text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 font-medium text-13"
                >
                    Cancel
                </button>
                <button
                    onClick={onSave}
                    disabled={!name.trim()}
                    className="px-4 py-2 text-13 font-medium text-white bg-text-primary rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Save
                </button>
            </div>
        </div>
    );
};
