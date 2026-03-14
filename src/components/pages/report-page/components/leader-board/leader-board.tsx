import { getOrders } from '@/services';
import { getProductDetail } from '@/services/products';

export const LeaderBoard = () => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const todaysOrders = getOrders({ scope: 'paid' }).filter((order) => {
    // TODO: Posteriormente, se debe filtrar con la fecha de inicio de caja
    const orderDate = new Date(order.createdAt).toISOString().split('T')[0];
    return orderDate === today;
  });

  const productSales: Record<string, number> = {};

  todaysOrders.forEach((order) => {
    order.items.forEach((item) => {
      productSales[item.productId] =
        (productSales[item.productId] || 0) + item.quantity;
    });
  });

  const topProducts = Object.entries(productSales)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([productId, quantity]) => {
      const product = getProductDetail(productId);
      return {
        id: productId,
        name: product?.name || 'Unknown',
        quantity,
        imagePath: product?.imagePath || '',
        imageAltText: product?.imageAltText || '',
      };
    });

  const podiumPositions = [
    {
      position: 1,
      pedestalHeight: 'h-28',
    },
    {
      position: 2,
      pedestalHeight: 'h-20',
    },
    {
      position: 3,
      pedestalHeight: 'h-12',
    },
  ];

  return (
    <div className='bg-card text-card-foreground border px-6 pt-6 shadow-sm'>
      <h3 className='mb-2 text-lg font-semibold'>
        Top {topProducts.length} más vendidos del día
      </h3>
      {topProducts.length === 0 ? (
        <div className='text-muted-foreground text-center'>
          No hay ventas hoy
        </div>
      ) : (
        <div className='flex items-end justify-center gap-4'>
          {podiumPositions.map((podiumConfig, index) => {
            const product = topProducts[index];
            if (!product) return null;

            return (
              <div
                key={podiumConfig.position}
                className='flex flex-col items-center'
              >
                <div
                  className={`mb-2 flex w-32 flex-col items-center justify-center p-4`}
                >
                  <div className='mb-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full shadow-lg'>
                    <img
                      src={product.imagePath}
                      alt={product.imageAltText}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <span
                    className={`text-center text-sm font-semibold leading-tight text-gray-900`}
                  >
                    {product.name}
                  </span>
                  <span className='text-xs text-gray-500'>
                    {product.quantity} vendidos
                  </span>
                </div>
                <div
                  className={`flex ${podiumConfig.pedestalHeight} w-16 items-center justify-center rounded-t-lg bg-slate-700 shadow-lg`}
                >
                  <span className={`font-bold text-white`}>
                    {podiumConfig.position}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
