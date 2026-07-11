import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { 
  useCreateGuestbookEntry, 
  useListGuestbookEntries, 
  getListGuestbookEntriesQueryKey 
} from '@workspace/api-client-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  message: z.string().min(1, 'Message is required').max(1000),
  emoji: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const emojis = ['🎓', '❤️', '🌟', '🎉', '🙏', '🥂', '💫', '✨'];

export function Guestbook() {
  const queryClient = useQueryClient();
  const { data: entries, isLoading } = useListGuestbookEntries();
  const createEntry = useCreateGuestbookEntry();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      message: '',
      emoji: '🎓',
    },
  });

  const onSubmit = (values: FormValues) => {
    createEntry.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast.success('Thank you for your message!');
          form.reset({ name: '', message: '', emoji: '🎓' });
          queryClient.invalidateQueries({ queryKey: getListGuestbookEntriesQueryKey() });
        },
        onError: () => {
          toast.error('Failed to send message. Please try again.');
        }
      }
    );
  };

  return (
    <section id="guestbook" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Leave a Message</h2>
          <p className="text-muted-foreground text-lg">Your words mean the world to me</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-card shadow-lg border-primary/20 sticky top-24">
              <CardContent className="p-6">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">Name</label>
                    <Input 
                      {...form.register('name')} 
                      placeholder="Your name" 
                      className="bg-background"
                      data-testid="input-guestbook-name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-destructive text-xs mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">Message</label>
                    <Textarea 
                      {...form.register('message')} 
                      placeholder="Share a memory or well wish..." 
                      className="min-h-[120px] bg-background resize-none"
                      data-testid="input-guestbook-message"
                    />
                    {form.formState.errors.message && (
                      <p className="text-destructive text-xs mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">Emoji</label>
                    <div className="flex flex-wrap gap-2">
                      {emojis.map((emoji) => (
                        <button
                          key={emoji}
                          type="button"
                          onClick={() => form.setValue('emoji', emoji)}
                          className={`text-2xl p-2 rounded-lg transition-colors ${
                            form.watch('emoji') === emoji 
                              ? 'bg-primary/20 border border-primary text-primary' 
                              : 'hover:bg-secondary border border-transparent grayscale grayscale-[0.5] hover:grayscale-0 opacity-70 hover:opacity-100'
                          }`}
                          data-testid={`button-emoji-${emoji}`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-medium shadow-md transition-all hover:shadow-lg"
                    disabled={createEntry.isPending}
                    data-testid="button-submit-guestbook"
                  >
                    {createEntry.isPending ? 'Sending...' : 'Sign Guestbook'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Entries Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="text-xl font-serif font-semibold">Messages</h3>
              <span className="text-muted-foreground text-sm bg-secondary px-3 py-1 rounded-full">
                {entries?.length || 0} message{entries?.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="space-y-4">
              {isLoading ? (
                [...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse bg-secondary/50 rounded-xl p-6 h-32" />
                ))
              ) : entries?.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground italic bg-secondary/20 rounded-xl border border-dashed border-border">
                  Be the first to sign the guestbook!
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {entries?.map((entry) => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-card rounded-xl p-6 shadow-sm border border-border group hover:border-primary/30 transition-colors"
                      data-testid={`guestbook-entry-${entry.id}`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl bg-secondary w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                            {entry.emoji || '🎓'}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground font-serif">{entry.name}</h4>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(entry.createdAt), 'MMM d, yyyy')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground/80 leading-relaxed pl-15">
                        {entry.message}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
