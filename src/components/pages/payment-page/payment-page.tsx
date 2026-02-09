import { Button, Header, Icon } from '@/components/shared';
import { PaymentForm, PaymentSummary } from './components';

export const PaymentPage = () => {
  const pageTitle = `Pagar cuenta`;

  return (
    <div className='flex flex-col gap-5 p-5'>
      <Header
        title={pageTitle}
        icon='walletMoneyLi'
      />
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <p className='font-semibold'>1. Precuenta</p>

          <PaymentSummary />

          {/* TODO: Payment Summary must be have share & copy buttons inner its structure */}
          <div className='flex gap-2'>
            <Button
              className='flex-1'
              size='lg'
            >
              <Icon
                name='shareLi'
                className='aspect-square w-5'
              />
              Compartir
            </Button>
            <Button
              className='flex-1'
              variant='outline'
              size='lg'
            >
              <Icon
                name='copyLi'
                className='aspect-square w-5'
              />
              Copiar
            </Button>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-semibold'>2. Elige cómo cancela el cliente</p>

          <PaymentForm />
        </div>
      </div>
    </div>
  );
};
