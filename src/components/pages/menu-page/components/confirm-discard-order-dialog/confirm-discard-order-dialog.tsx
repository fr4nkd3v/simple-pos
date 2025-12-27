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
            Se perderá todo el registro de los productos que escogiste para que
            puedas iniciar una nueva cuenta desde cero.
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
