import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const MOCK_CART_ITEMS = [
  {
    id: '1',
    title: 'Boubou en Soie de Dakar',
    price: 45000,
    currency: 'CFA',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Huile de Baobab Pure',
    price: 8500,
    currency: 'CFA',
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
  },
];

export function CartSheet() {
  const total = MOCK_CART_ITEMS.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            3
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Votre Panier
          </SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="flex-grow p-6">
          <div className="space-y-6">
            {MOCK_CART_ITEMS.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="h-20 w-20 rounded-xl overflow-hidden border bg-muted shrink-0">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex-grow space-y-1">
                  <h4 className="font-bold text-sm line-clamp-1">{item.title}</h4>
                  <p className="text-primary font-black text-sm">
                    {item.price.toLocaleString()} {item.currency}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border rounded-lg h-8">
                      <Button variant="ghost" size="icon" className="h-7 w-7 rounded-none">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                      <Button variant="ghost" size="icon" className="h-7 w-7 rounded-none">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <SheetFooter className="p-6 border-t bg-muted/30">
          <div className="w-full space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sous-total</span>
                <span>{total.toLocaleString()} CFA</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Livraison</span>
                <span className="text-secondary font-medium">Gratuite</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between text-lg font-black">
                <span>Total</span>
                <span className="text-primary">{total.toLocaleString()} CFA</span>
              </div>
            </div>
            <Button className="w-full h-12 rounded-xl gap-2 text-lg shadow-lg shadow-primary/20">
              Passer à la caisse <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
              Paiement sécurisé via Mobile Money & Cartes
            </p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
