import { motion } from 'motion/react';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORY_IMAGES: Record<string, string> = {
  'Mode & Textile': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
  'Artisanat & Déco': 'https://images.unsplash.com/photo-1518998053574-53ee79b17ec1?auto=format&fit=crop&q=80&w=800',
  'Beauté & Soins': 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
  'Épicerie Fine': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
  'Art & Culture': 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
  'Bijoux': 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800',
  'Maison': 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800',
};

export function Categories() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl font-black tracking-tight">Nos Catégories</h1>
        <p className="text-muted-foreground text-lg">Parcourez notre sélection par univers.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCT_CATEGORIES.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/explore?category=${encodeURIComponent(category)}`}>
              <Card className="group relative overflow-hidden aspect-[4/3] border-none shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={CATEGORY_IMAGES[category] || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800'} 
                  alt={category}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{category}</h3>
                    <p className="text-white/70 text-sm font-medium">Découvrir la collection</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
