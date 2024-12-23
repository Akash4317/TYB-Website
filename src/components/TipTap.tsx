'use client';

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


export default function TipTap({
	title,
	onChange,
}: {
	title: string;
	onChange: (value: any) => void;
}) {
	const editor = useEditor({
		extensions: [
			StarterKit.configure(),
			Heading.configure({
				HTMLAttributes: {
					class: 'text-2xl font-bold',
				},
				levels: [1],
			}),
			Highlight,
			Underline,
			Superscript,
			SubScript,
			TextAlign.configure({ types: ['heading', 'paragraph'] }),
			Image,
			BulletList,
			ListItem,
			OrderedList
		],
		content: `<p>${title}</p>`,
		editorProps: {
			attributes: {
				class: 'rounded border p-4',
			},
		},
		onUpdate({ editor }) {
			onChange(editor.getJSON());
		},
	});

	return (
		<div className='flex flex-col space-y-4'>
			<Toolbar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
}