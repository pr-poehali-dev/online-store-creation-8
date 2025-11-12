import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface CartItem {
  id: number;
  name: string;
  price: string;
  priceNumber: number;
  image: string;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const Cart = ({ items, onRemoveItem, onUpdateQuantity, isOpen, onOpenChange }: CartProps) => {
  const totalPrice = items.reduce((sum, item) => sum + item.priceNumber * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          <Icon name="ShoppingCart" size={20} />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-2">
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-card border-border">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-accent">Корзина</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center">
            <Icon name="ShoppingCart" size={64} className="text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-lg">Корзина пуста</p>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-120px)]">
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border border-border rounded-lg p-4 hover:border-accent transition-colors">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">{item.name}</h3>
                    <p className="text-accent font-bold mb-3">{item.price}</p>
                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Icon name="Minus" size={14} />
                      </Button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="ml-auto text-destructive hover:text-destructive"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold">Итого:</span>
                <span className="text-2xl font-bold text-accent">
                  {totalPrice.toLocaleString('ru-RU')} ₽
                </span>
              </div>
              <Button 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
                onClick={() => alert('Функция оформления заказа в разработке')}
              >
                Оформить заказ
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
