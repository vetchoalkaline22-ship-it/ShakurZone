import { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/shop/ProductCard';
import { PRODUCT_CATEGORIES } from '@/lib/constants';

const MOCK_PRODUCTS = [
  {
    id: '1',
    title: 'Boubou en Soie de Dakar',
    price: 45000,
    currency: 'CFA',
    category: 'Mode & Textile',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    merchantName: 'Maison de la Soie',
  },
  {
    id: '2',
    title: 'Masque en Bois Sculpté',
    price: 15000,
    currency: 'CFA',
    category: 'Artisanat & Déco',
    image: 'https://images.unsplash.com/photo-1518998053574-53ee79b17ec1?auto=format&fit=crop&q=80&w=800',
    merchantName: 'Artisans du Bénin',
  },
  {
    id: '3',
    title: 'Huile de Baobab Pure',
    price: 8500,
    currency: 'CFA',
    category: 'Beauté & Soins',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    merchantName: 'Nature d\'Afrique',
  },
  {
    id: '4',
    title: 'Sac en Raphia Tissé',
    price: 12000,
    currency: 'CFA',
    category: 'Mode & Textile',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800',
    merchantName: 'Tissage Royal',
  },
  {
    id: '5',
    title: 'Épices de Zanzibar',
    price: 5500,
    currency: 'CFA',
    category: 'Épicerie Fine',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
    merchantName: 'Saveurs d\'Orient',
  },
  {
    id: '6',
    title: 'Collier en Perles Masaï',
    price: 18000,
    currency: 'CFA',
    category: 'Bijoux',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800',
    merchantName: 'Kenya Crafts',
  },
];

export function Explore() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.merchantName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight">Explorer le Marché</h1>
          <p className="text-muted-foreground text-lg">Découvrez des trésors uniques venus des quatre coins du continent.</p>
        </div>
        <div className="relative w-full md:w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Rechercher un produit..." 
            className="pl-10 h-12 rounded-2xl bg-muted/50 border-none focus-visible:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Categories Scroll */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
          <Button 
            variant={selectedCategory === 'Tous' ? 'default' : 'outline'}
            className="rounded-full px-6 whitespace-nowrap"
            onClick={() => setSelectedCategory('Tous')}
          >
            Tous
          </Button>
          {PRODUCT_CATEGORIES.map((category) => (
            <Button 
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="rounded-full px-6 whitespace-nowrap"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">
            {filteredProducts.length} produits trouvés
          </p>
          <Button variant="ghost" size="sm" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" /> Filtres
          </Button>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center mx-auto">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold">Aucun produit trouvé</h3>
            <p className="text-muted-foreground">Essayez de modifier vos filtres ou votre recherche.</p>
            <Button variant="outline" onClick={() => { setSelectedCategory('Tous'); setSearchQuery(''); }}>
              Réinitialiser
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
