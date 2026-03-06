import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Field, Input, Stack, Textarea } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import emailjs from "@emailjs/browser";

const schema = z.object({
  email: z
    .string()
    .email("Please enter a valid email.")
    .optional()
    .or(z.literal("")),
  msg: z
    .string()
    .min(5, "Message must be at least 5 characters.")
    .max(500, "Message is too long."),
});

type FormData = z.infer<typeof schema>;

function ContactForm() {
  const glassBg = useColorModeValue("whiteAlpha.600", "blackAlpha.300");
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  const submitted = async (data: FormData) => {
    try {
      const templateParams = {
        name: data.email || "Anonymous User",
        message: data.msg,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("FAILED...", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <Box
      maxW="50%"
      mx="auto"
      w="95%"
      p={8}
      bg={glassBg}
      backdropFilter="blur(12px)"
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      transition="border-color 0.2s"
    >
      <form onSubmit={handleSubmit(submitted)}>
        <Stack gap={6} align="flex-start">
          <Field.Root invalid={!!errors.email}>
            <Field.Label htmlFor="email">Email</Field.Label>
            <Input {...register("email")} id="email" placeholder="Optional" />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.msg}>
            <Field.Label htmlFor="msg">Message</Field.Label>
            <Textarea
              {...register("msg")}
              id="msg"
              placeholder="Your message..."
            />
            <Field.ErrorText>{errors.msg?.message}</Field.ErrorText>
          </Field.Root>

          <Button
            type="submit"
            loading={isSubmitting}
            loadingText="Sending..."
            width="full"
          >
            Send Message
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
export default ContactForm;
