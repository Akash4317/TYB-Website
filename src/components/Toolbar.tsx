'use client';

import { Editor } from '@tiptap/react';
import {
	Bold,
	Italic,
	Underline,
	Strikethrough,
	List,
	ListOrdered,
	Superscript,
	Subscript,
	AlignLeft,
	AlignCenter,
	AlignRight,
	AlignJustify,
	Heading,
	Code,
	SeparatorHorizontal,
	WrapText,
	Undo,
	Redo,
	Image,
	ListCheck,
} from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { Divider, Tooltip } from '@mantine/core';

type Props = {
	editor: Editor | null;
};

export function Toolbar({ editor }: Props) {
	if (!editor) return null;

	return (
		<div className='flex justify-between border rounded p-2'>
			<div className='flex items-center space-x-2'>
				<>
					<Tooltip label='Heading' position='top'>
						<Toggle
							size='sm'
							pressed={editor.isActive('heading', { level: 1 })}
							onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
						>
							<Heading className='h-6 w-6' />
						</Toggle>
					</Tooltip>
					<Toggle
						size='sm'
						pressed={editor.isActive('bold')}
						onPressedChange={() => editor.chain().focus().toggleBold().run()}
					>
						<Bold className='h-6 w-6' />
					</Toggle>
					<Toggle
						size='sm'
						pressed={editor.isActive('italic')}
						onPressedChange={() => editor.chain().focus().toggleItalic().run()}
					>
						<Italic className='h-6 w-6' />
					</Toggle>
					<Toggle
						size='sm'
						pressed={editor.isActive('underline')}
						onPressedChange={() => editor.chain().focus().toggleUnderline?.().run()}
					>
						<Underline className='h-6 w-6' />
					</Toggle>
					<Toggle
						size='sm'
						pressed={editor.isActive('strike')}
						onPressedChange={() => editor.chain().focus().toggleStrike().run()}
					>
						<Strikethrough className='h-6 w-6' />
					</Toggle>
				</>
				<Divider orientation='vertical' className='border h-full' />
				<Toggle
					size='sm'
					pressed={editor.isActive('superscript')}
					onPressedChange={() => editor.chain().focus().toggleSuperscript?.().run()}
				>
					<Superscript className='h-6 w-6' />
				</Toggle>
				<Toggle
					size='sm'
					pressed={editor.isActive('subscript')}
					onPressedChange={() => editor.chain().focus().toggleSubscript?.().run()}
				>
					<Subscript className='h-6 w-6' />
				</Toggle>
				<Toggle
					size='sm'
					pressed={editor.isActive('bulletList')}
					onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
				>
					<List className='h-6 w-6' />
				</Toggle>
				<Toggle
					size='sm'
					pressed={editor.isActive('orderedList')}
					onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
				>
					<ListOrdered className='h-6 w-6' />
				</Toggle>
				<Toggle
					size='sm'
					pressed={editor.isActive('listItem')}
					onPressedChange={() => editor.chain().focus().splitListItem('listItem').run()}
				>
					<ListCheck className='h-6 w-6' />
				</Toggle>
				<Divider orientation='vertical' className='border h-full' />
				<>
					<Toggle
						size='sm'
						pressed={editor.isActive({ textAlign: 'left' })}
						onPressedChange={() => editor.chain().focus().setTextAlign('left').run()}
					>
						<AlignLeft className='h-6 w-6' />
					</Toggle>
					<Toggle
						size='sm'
						pressed={editor.isActive({ textAlign: 'center' })}
						onPressedChange={() => editor.chain().focus().setTextAlign('center').run()}
					>
						<AlignCenter className='h-6 w-6' />
					</Toggle>
					<Toggle
						size='sm'
						pressed={editor.isActive({ textAlign: 'right' })}
						onPressedChange={() => editor.chain().focus().setTextAlign('right').run()}
					>
						<AlignRight className='h-6 w-6' />
					</Toggle>
					<Toggle
						size='sm'
						pressed={editor.isActive({ textAlign: 'justify' })}
						onPressedChange={() => editor.chain().focus().setTextAlign('justify').run()}
					>
						<AlignJustify className='h-6 w-6' />
					</Toggle>
				</>
				<Divider orientation='vertical' className='border h-full' />
				<Toggle
					size='sm'
					pressed={editor.isActive('code')}
					onPressedChange={() => editor.chain().focus().toggleCode().run()}
				>
					<Code className='h-6 w-6' />
				</Toggle>
				<Toggle
					size='sm'
					pressed={editor.isActive('fold')}
					onPressedChange={() => editor.chain().focus().setHorizontalRule().run()}
				>
					<SeparatorHorizontal className='h-6 w-6' />
				</Toggle>
				<Toggle
					size='sm'
					pressed={editor.isActive('hardBreak')}
					onPressedChange={() => editor.chain().focus().setHardBreak().run()}
				>
					<WrapText className='h-6 w-6' />
				</Toggle>
				<Divider orientation='vertical' className='border h-full' />
				<Toggle
					size='sm'
					pressed={false}
					onPressedChange={() => editor.chain().focus().setImage({ src: '', alt: 'image', title: '' }).run()}
				>
					<Image className='h-6 w-6' />
				</Toggle>
			</div>

			<div className='flex border-l'>
				<Toggle
					size='sm'
					pressed={false}
					disabled={!editor.can()
						.chain()
						.focus()
						.undo()
						.run()}
					onPressedChange={() => editor.chain().focus().undo().run()}
				>
					<Undo className='h-6 w-6' />
				</Toggle>
				<Toggle
					size='sm'
					pressed={false}
					disabled={!editor.can()
						.chain()
						.focus()
						.redo()
						.run()}
					onPressedChange={() => editor.chain().focus().redo().run()}
				>
					<Redo className='h-6 w-6' />
				</Toggle>
			</div>
		</div>
	);
}
