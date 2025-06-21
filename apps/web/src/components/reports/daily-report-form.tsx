'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from 'react-query'
import { z } from 'zod'
import { dailyReportsApi } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Loader2, Save, X } from 'lucide-react'

const dailyReportSchema = z.object({
  date: z.string().optional(),
  ticketsResolved: z.number().min(0, 'Must be 0 or greater').default(0),
  chatsHandled: z.number().min(0, 'Must be 0 or greater').default(0),
  githubIssues: z.number().min(0, 'Must be 0 or greater').default(0),
  emailsProcessed: z.number().min(0, 'Must be 0 or greater').default(0),
  callsAttended: z.number().min(0, 'Must be 0 or greater').default(0),
  notes: z.string().optional(),
  links: z.array(z.string().url('Invalid URL')).optional(),
})

type DailyReportForm = z.infer<typeof dailyReportSchema>

interface DailyReportFormProps {
  initialData?: any
  onSuccess?: () => void
  onCancel?: () => void
}

export function DailyReportForm({ initialData, onSuccess, onCancel }: DailyReportFormProps) {
  const [linksInput, setLinksInput] = useState(
    initialData?.links?.join('\n') || ''
  )
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<DailyReportForm>({
    resolver: zodResolver(dailyReportSchema),
    defaultValues: {
      date: initialData?.date ? new Date(initialData.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      ticketsResolved: initialData?.ticketsResolved || 0,
      chatsHandled: initialData?.chatsHandled || 0,
      githubIssues: initialData?.githubIssues || 0,
      emailsProcessed: initialData?.emailsProcessed || 0,
      callsAttended: initialData?.callsAttended || 0,
      notes: initialData?.notes || '',
    },
  })

  const createMutation = useMutation(dailyReportsApi.create, {
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Daily report created successfully',
      })
      queryClient.invalidateQueries('daily-report')
      queryClient.invalidateQueries('daily-reports')
      queryClient.invalidateQueries('daily-report-stats')
      onSuccess?.()
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.response?.data?.error || 'Failed to create daily report',
        variant: 'destructive',
      })
    },
  })

  const updateMutation = useMutation(
    (data: DailyReportForm) => dailyReportsApi.update(initialData.id, data),
    {
      onSuccess: () => {
        toast({
          title: 'Success',
          description: 'Daily report updated successfully',
        })
        queryClient.invalidateQueries('daily-report')
        queryClient.invalidateQueries('daily-reports')
        queryClient.invalidateQueries('daily-report-stats')
        onSuccess?.()
      },
      onError: (error: any) => {
        toast({
          title: 'Error',
          description: error.response?.data?.error || 'Failed to update daily report',
          variant: 'destructive',
        })
      },
    }
  )

  const onSubmit = (data: DailyReportForm) => {
    // Process links
    const links = linksInput
      .split('\n')
      .map(link => link.trim())
      .filter(link => link.length > 0)

    const submitData = {
      ...data,
      links: links.length > 0 ? links : undefined,
    }

    if (initialData) {
      updateMutation.mutate(submitData)
    } else {
      createMutation.mutate(submitData)
    }
  }

  const isLoading = createMutation.isLoading || updateMutation.isLoading

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Date */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium mb-2">
          Date
        </label>
        <Input
          id="date"
          type="date"
          {...register('date')}
          className={errors.date ? 'border-destructive' : ''}
        />
        {errors.date && (
          <p className="mt-1 text-sm text-destructive">
            {errors.date.message}
          </p>
        )}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="ticketsResolved" className="block text-sm font-medium mb-2">
            Tickets Resolved
          </label>
          <Input
            id="ticketsResolved"
            type="number"
            min="0"
            {...register('ticketsResolved', { valueAsNumber: true })}
            className={errors.ticketsResolved ? 'border-destructive' : ''}
          />
          {errors.ticketsResolved && (
            <p className="mt-1 text-sm text-destructive">
              {errors.ticketsResolved.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="chatsHandled" className="block text-sm font-medium mb-2">
            Chats Handled
          </label>
          <Input
            id="chatsHandled"
            type="number"
            min="0"
            {...register('chatsHandled', { valueAsNumber: true })}
            className={errors.chatsHandled ? 'border-destructive' : ''}
          />
          {errors.chatsHandled && (
            <p className="mt-1 text-sm text-destructive">
              {errors.chatsHandled.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="githubIssues" className="block text-sm font-medium mb-2">
            GitHub Issues
          </label>
          <Input
            id="githubIssues"
            type="number"
            min="0"
            {...register('githubIssues', { valueAsNumber: true })}
            className={errors.githubIssues ? 'border-destructive' : ''}
          />
          {errors.githubIssues && (
            <p className="mt-1 text-sm text-destructive">
              {errors.githubIssues.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="emailsProcessed" className="block text-sm font-medium mb-2">
            Emails Processed
          </label>
          <Input
            id="emailsProcessed"
            type="number"
            min="0"
            {...register('emailsProcessed', { valueAsNumber: true })}
            className={errors.emailsProcessed ? 'border-destructive' : ''}
          />
          {errors.emailsProcessed && (
            <p className="mt-1 text-sm text-destructive">
              {errors.emailsProcessed.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="callsAttended" className="block text-sm font-medium mb-2">
            Calls Attended
          </label>
          <Input
            id="callsAttended"
            type="number"
            min="0"
            {...register('callsAttended', { valueAsNumber: true })}
            className={errors.callsAttended ? 'border-destructive' : ''}
          />
          {errors.callsAttended && (
            <p className="mt-1 text-sm text-destructive">
              {errors.callsAttended.message}
            </p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-2">
          Notes (Optional)
        </label>
        <Textarea
          id="notes"
          placeholder="Add any additional notes about your day..."
          rows={4}
          {...register('notes')}
          className={errors.notes ? 'border-destructive' : ''}
        />
        {errors.notes && (
          <p className="mt-1 text-sm text-destructive">
            {errors.notes.message}
          </p>
        )}
      </div>

      {/* Links */}
      <div>
        <label htmlFor="links" className="block text-sm font-medium mb-2">
          Relevant Links (Optional)
        </label>
        <Textarea
          id="links"
          placeholder="Add relevant URLs (one per line)..."
          rows={3}
          value={linksInput}
          onChange={(e) => setLinksInput(e.target.value)}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Enter one URL per line. These could be tickets, PRs, documentation, etc.
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end space-x-2">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isLoading}
          >
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {initialData ? 'Updating...' : 'Creating...'}
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              {initialData ? 'Update Report' : 'Create Report'}
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
