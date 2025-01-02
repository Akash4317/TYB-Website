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
	Heading1,
	Heading2,
	Heading3,
	Code,
	SeparatorHorizontal,
	WrapText,
	Undo,
	Redo,
	Image,
	ListCheck,
} from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { Divider } from '@mantine/core';

type Props = {
	editor: Editor | null;
};
type Option = {
	value: string;
	label: string;
	icon: any;
	level?: number;
	onChange: () => void;
	pressed: boolean;
	disabled?: boolean;
};
export function Toolbar({ editor }: Props) {
	if (!editor) return null;

	const addImage = () => {
		const src = prompt('Enter the URL of the image:');
		if (!src) return;
		editor.chain().focus().setImage({ src, alt: 'BlogImage', title: 'BlogImage' }).run();
	}
	const BasicOptions: Option[] = [
		{ value: 'heading1', label: 'Heading', icon: Heading1, level: 1, onChange: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), pressed: editor.isActive('heading1', { level: 1 }) },
		{ value: 'heading2', label: 'Heading', icon: Heading2, level: 2, onChange: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), pressed: editor.isActive('heading2', { level: 2 }) },
		{ value: 'heading3', label: 'Heading', icon: Heading3, level: 3, onChange: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), pressed: editor.isActive('heading3', { level: 3 }) },
		{ value: 'bold', label: 'Bold', icon: Bold, onChange: () => editor.chain().focus().toggleBold().run(), pressed: editor.isActive('bold') },
		{ value: 'italic', label: 'Italic', icon: Italic, onChange: () => editor.chain().focus().toggleItalic().run(), pressed: editor.isActive('italic') },
		{ value: 'underline', label: 'Underline', icon: Underline, onChange: () => editor.chain().focus().toggleUnderline?.().run(), pressed: editor.isActive('underline') },
		{ value: 'strike', label: 'Strikethrough', icon: Strikethrough, onChange: () => editor.chain().focus().toggleStrike().run(), pressed: editor.isActive('strike') },
		{ value: 'superscript', label: 'Superscript', icon: Superscript, onChange: () => editor.chain().focus().toggleSuperscript?.().run(), pressed: editor.isActive('superscript') },
		{ value: 'subscript', label: 'Subscript', icon: Subscript, onChange: () => editor.chain().focus().toggleSubscript?.().run(), pressed: editor.isActive('subscript') },
	]
	const TextAlignOptions: Option[] = [
		{ value: 'textAlignLeft', label: 'Align Left', icon: AlignLeft, onChange: () => editor.chain().focus().setTextAlign('left').run(), pressed: editor.isActive({ textAlign: 'left' }) },
		{ value: 'textAlignCenter', label: 'Align Center', icon: AlignCenter, onChange: () => editor.chain().focus().setTextAlign('center').run(), pressed: editor.isActive({ textAlign: 'center' }) },
		{ value: 'textAlignRight', label: 'Align Right', icon: AlignRight, onChange: () => editor.chain().focus().setTextAlign('right').run(), pressed: editor.isActive({ textAlign: 'right' }) },
		{ value: 'textAlignJustify', label: 'Align Justify', icon: AlignJustify, onChange: () => editor.chain().focus().setTextAlign('justify').run(), pressed: editor.isActive({ textAlign: 'justify' }) },

	]
	const AdvancedOptions: Option[] = [
		{ value: 'bulletList', label: 'Bullet List', icon: List, onChange: () => editor.chain().focus().toggleBulletList().run(), pressed: editor.isActive('bulletList') },
		{ value: 'orderedList', label: 'Ordered List', icon: ListOrdered, onChange: () => editor.chain().focus().toggleOrderedList().run(), pressed: editor.isActive('orderedList') },
		{ value: 'listItem', label: 'List Item', icon: ListCheck, onChange: () => editor.chain().focus().splitListItem('listItem').run(), pressed: editor.isActive('listItem') },
		{ value: 'code', label: 'Code', icon: Code, onChange: () => editor.chain().focus().toggleCode().run(), pressed: editor.isActive('code') },
		{ value: 'fold', label: 'Separator', icon: SeparatorHorizontal, onChange: () => editor.chain().focus().setHorizontalRule().run(), pressed: editor.isActive('fold') },
		{ value: 'hardBreak', label: 'Wrap Text', icon: WrapText, onChange: () => editor.chain().focus().setHardBreak().run(), pressed: editor.isActive('hardBreak') },
		{ value: 'image', label: 'Image', icon: Image, onChange: addImage, pressed: false },
	]
	const OtherOptions: Option[] = [

		{ value: 'undo', label: 'Undo', icon: Undo, onChange: () => editor.chain().focus().undo().run(), pressed: false, disabled: !editor.can().chain().focus().undo().run() },
		{ value: 'redo', label: 'Redo', icon: Redo, onChange: () => editor.chain().focus().redo().run(), pressed: false, disabled: !editor.can().chain().focus().redo().run() },
	]
	return (
		<div className='sticky top-0 z-50 p-2'>
			<div className='border rounded flex justify-between items-center h-10 overflow-hidden bg-primary-foreground'>
				{
					BasicOptions.map((option) => (
						<Toggle
							key={option.value}
							size='sm'
							pressed={editor.isActive(option.value)}
							onPressedChange={option.onChange}
							disabled={option.disabled}
						>
							<option.icon className='h-6 w-6' />
						</Toggle>
					))
				}
				<Divider orientation='vertical' className='border h-full' />
				{
					TextAlignOptions.map((option) => (
						<Toggle
							key={option.value}
							size='sm'
							pressed={option.pressed}
							onPressedChange={option.onChange}
						>
							<option.icon className='h-6 w-6' />
						</Toggle>
					))
				}
				<Divider orientation='vertical' className='border h-full' />
				{
					AdvancedOptions.map((option) => (
						<Toggle
							key={option.value}
							size='sm'
							pressed={option.pressed}
							onPressedChange={option.onChange}
						>
							<option.icon className='h-6 w-6' />
						</Toggle>
					))
				}
				<Divider orientation='vertical' className='border h-full' />
				{
					OtherOptions.map((option) => (
						<Toggle
							key={option.value}
							size='sm'
							pressed={option.pressed}
							onPressedChange={option.onChange}
							disabled={option.disabled}
						>
							<option.icon className='h-6 w-6' />
						</Toggle>
					))
				}
			</div>
		</div>
	)
}
