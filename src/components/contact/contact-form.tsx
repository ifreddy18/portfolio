'use client'

/*
?  Tutorial: https://dev.to/brendan_dev/how-to-create-a-contact-form-with-emailjs-zod-shadcn-ui-typescript-using-react-and-nextjs-2paa
*/

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import React, { useRef, useState } from 'react'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast' //optional
import { Textarea } from '@/components/ui/textarea'
import { PaperPlaneIcon } from '@radix-ui/react-icons'

const FormSchema = z.object({
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	email: z.string().email('Invalid email address.').min(2, {
		message: 'Email must be at least 2 characters.',
	}),
	message: z.string().min(10, {
		message: 'Message should be at least 10 characters.',
	}),
})

export const ContactForm = () => {
	const { toast } = useToast()
	const [isSendingMessage, setIsSendingMessage] = useState(false)

	// EmailJS needs the `ref` parameter in a form, ShadCN doesn't use
	// this by default so we have to import it.
	const formRef = useRef<HTMLFormElement | null>(null)

	// configure Zod default values for the form
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: '',
			email: '',
			message: '',
		},
	})

	// Create the handler that connects to EmailJS.
	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		setIsSendingMessage(true)

		if (formRef.current) {
			console.log({ formRedCurrent: formRef.current, data })

			emailjs
				.sendForm(
					process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
					process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
					formRef.current,
					{
						publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
					},
				)
				.then(
					() => {
						toast({
							title: 'Email sent.',
							description: `Thanks ${data.username}, I'll be in touch.`,
						})
						form.reset() //clear the fields after submission
						setIsSendingMessage(false)
					},
					(error) => {
						toast({
							variant: 'destructive',
							title: 'Email failed to send.',
							description: `Please contact support if this continues.`,
						})
						setIsSendingMessage(false)
						console.warn('FAILED...', JSON.stringify(error))
					},
				)
		}
	}

	return (
		<Form {...form}>
			<form
				ref={formRef} //Required by EmailJS
				onSubmit={form.handleSubmit(onSubmit)}
				className="mt-5 flex w-full flex-col justify-center space-y-6 sm:w-2/3"
			>
				<FormField
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									className="border-primary"
									placeholder="Your Name"
									{...field}
								/>
							</FormControl>
							<FormMessage className="text-xs text-red-600" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									className="border-primary"
									placeholder="Email Address"
									{...field}
								/>
							</FormControl>
							<FormMessage className="text-xs text-red-600" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									className="border-primary"
									placeholder="Type your message here."
									id="message"
									{...field}
								/>
							</FormControl>
							<FormMessage className="text-xs text-red-600" />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="text-md w-1/3 self-center"
					disabled={isSendingMessage}
				>
					<PaperPlaneIcon />
					&nbsp;Send
				</Button>
			</form>
		</Form>
	)
}
