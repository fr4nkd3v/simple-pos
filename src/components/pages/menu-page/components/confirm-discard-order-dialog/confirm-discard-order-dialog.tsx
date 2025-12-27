import { AlertDialogFooter, AlertDialogHeader } from '@/components/shadcn';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@radix-ui/react-alert-dialog';
import type { TConfirmDiscardDialogProps } from './confirm-discard-order-dialog.types';

export const ConfirmDiscardDialog = ({
  open,
  onOpenChange,
  onConfirm,
}: TConfirmDiscardDialogProps) => {
  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            ¿Seguro que quieres descartar esta cuenta?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Al descartar la cuenta se perderá todo el registro de los productos
            que escogiste y se borrará la cuenta para que puedas iniciar una
            nueva desde cero.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Descartar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
