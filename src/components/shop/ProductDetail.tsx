import { useState } from 'react';
import { ShoppingCart, Heart, Share2, ShieldCheck, Truck, RefreshCcw, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  
  const product = {
    title: 'Boubou en Soie de Dakar',
    price: 45000,
    currency: 'CFA',
    category: 'Mode & Textile',
    merchant: 'Maison de la Soie',
    rating: 4.9,
    reviews: 24,
    description: 'Ce boubou traditionnel est confectionné à la main dans nos ateliers de Dakar. Utilisant une soie de première qualité, il allie élégance traditionnelle et confort moderne.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
    ],
    details: [
      '100% Soie naturelle',
      'Teinture artisanale',
      'Taille unique ajustable',
      'Lavage à la main recommandé',
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden border bg-muted">
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border cursor-pointer hover:border-primary transition-colors">
                <img src={img} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="rounded-full">{product.category}</Badge>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="rounded-full"><Share2 className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="rounded-full"><Heart className="h-4 w-4" /></Button>
              </div>
            </div>
            <h1 className="text-4xl font-black tracking-tight">{product.title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews} avis)</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm font-medium text-primary">Vendu par {product.merchant}</span>
            </div>
          </div>

          <div className="text-4xl font-black text-primary">
            {product.price.toLocaleString()} {product.currency}
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg">
            {product.description}
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-xl h-12">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-11 w-11 rounded-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-11 w-11 rounded-none"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
              <Button className="flex-grow h-12 rounded-xl gap-2 text-lg shadow-xl shadow-primary/20">
                <ShoppingCart className="h-5 w-5" /> Ajouter au panier
              </Button>
            </div>
            <Button variant="outline" className="w-full h-12 rounded-xl text-lg">Acheter maintenant</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-muted/30 space-y-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider">Paiement Sécurisé</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-muted/30 space-y-2">
              <Truck className="h-6 w-6 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider">Livraison Rapide</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-muted/30 space-y-2">
              <RefreshCcw className="h-6 w-6 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider">Retours Faciles</span>
            </div>
          </div>

          <Tabs defaultValue="details" className="pt-8">
            <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 gap-8">
              <TabsTrigger value="details" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 font-bold">Détails</TabsTrigger>
              <TabsTrigger value="shipping" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 font-bold">Livraison</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 font-bold">Avis</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-6">
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="pt-6 text-muted-foreground leading-relaxed">
              Expédié depuis Dakar, Sénégal. Livraison locale sous 24-48h. Livraison internationale disponible (7-10 jours ouvrés).
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted shrink-0" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">Moussa K.</span>
                      <div className="flex items-center">
                        {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Qualité exceptionnelle, la soie est magnifique. Je recommande vivement !</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
