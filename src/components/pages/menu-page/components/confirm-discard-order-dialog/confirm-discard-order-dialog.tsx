import {
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/components/shadcn';
import type { TConfirmDiscardDialogProps } from './confirm-discard-order-dialog.types';
import { useCurrentOrderDetail } from '@/hooks';

export const ConfirmDiscardDialog = ({
  open,
  onOpenChange,
  onConfirm,
}: TConfirmDiscardDialogProps) => {
  const { isEditing } = useCurrentOrderDetail();

  const discardCreate = {
    title: '¿Seguro que quieres descartar esta cuenta?',
    description:
      'Se perderá todo el registro de los productos que escogiste para que puedas iniciar una nueva cuenta desde cero.',
  };
  const discardEditing = {
    title: '¿Seguro que quieres descartar la edición de esta cuenta?',
    description:
      'Se perderá todo el registro de los productos que escogiste en esta ultima ronda.',
  };

  const discardTexts = isEditing ? discardEditing : discardCreate;

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{discardTexts.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {discardTexts.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onConfirm}>
            Si, descartar
          </AlertDialogAction>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
