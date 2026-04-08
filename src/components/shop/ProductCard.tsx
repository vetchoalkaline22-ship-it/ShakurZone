import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    currency: string;
    category: string;
    image: string;
    merchantName: string;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="overflow-hidden border-none bg-card/50 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300">
        <Link to={`/product/${product.id}`}>
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <Badge className="absolute top-2 left-2 bg-background/80 text-foreground backdrop-blur-md border-none">
              {product.category}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/50 backdrop-blur-md hover:bg-primary hover:text-primary-foreground"
              onClick={(e) => {
                e.preventDefault();
                // Handle like
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </Link>
        <CardContent className="p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
            {product.merchantName}
          </p>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-bold text-lg line-clamp-1 mb-2 hover:text-primary transition-colors">{product.title}</h3>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-xl font-black text-primary">
              {product.price.toLocaleString()} {product.currency}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full gap-2 rounded-xl group">
            <ShoppingCart className="h-4 w-4 transition-transform group-hover:scale-110" />
            Ajouter au panier
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
