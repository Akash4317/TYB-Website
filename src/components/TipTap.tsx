'use client';
import { useEffect } from 'react';

import { Toolbar } from './Toolbar';
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';

import Image from '@tiptap/extension-image';
import Heading from '@tiptap/extension-heading';
import ListItem from '@tiptap/extension-list-item';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import SubScript from '@tiptap/extension-subscript';
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import Superscript from '@tiptap/extension-superscript';
import OrderedList from '@tiptap/extension-ordered-list';
import ImageResize from "tiptap-extension-resize-image";


export default function TipTap({
	title,
	onChange,
	content,
	enableEdit = true,
}: {
	title: string;
	content?: any;
	onChange?: (value: any) => void;
	enableEdit?: boolean;
}) {
	const editor = useEditor({
		extensions: [
			StarterKit.configure(),
			Heading.configure({
				levels: [1, 2, 3],
			}),
			Highlight,
			Underline,
			Superscript,
			SubScript,
			TextAlign.configure({ types: ['heading', 'paragraph'] }),
			Image,
			ImageResize,
			BulletList.configure({
				HTMLAttributes: {
					class: "list-disc ml-3",
				},
			}),
			ListItem,
			OrderedList.configure({
				HTMLAttributes: {
					class: "list-decimal ml-3",
				},
			}),
		],
		content: `<p>${title}</p>`,
		editorProps: {
			attributes: {
				class: 'rounded border p-4',
			},
		},
		onUpdate({ editor }) {
			if (!onChange) return;
			onChange(editor.getJSON());
		},
		editable: enableEdit,
	});

	useEffect(() => {
		if (editor && content) {
			editor.commands.setContent(content);
		}
	}, [editor, content]);

	if (!editor) {
		return null;
	}
	return (
		<div className='flex flex-col space-y-4 pr-2'>
			{
				enableEdit &&
				<Toolbar editor={editor} />
			}
			<EditorContent editor={editor} />
		</div>
	);
}