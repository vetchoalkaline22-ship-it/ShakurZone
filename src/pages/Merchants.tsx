import { motion } from 'motion/react';
import { MapPin, Star, Store, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const MOCK_MERCHANTS = [
  {
    id: 'm1',
    name: 'Maison de la Soie',
    description: 'Le meilleur du textile sénégalais, soies et cotons tissés main.',
    location: 'Dakar, Sénégal',
    rating: 4.9,
    reviews: 128,
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=MS',
    banner: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    category: 'Mode',
  },
  {
    id: 'm2',
    name: 'Artisans du Bénin',
    description: 'Sculptures sur bois et bronzes traditionnels d\'Abomey.',
    location: 'Cotonou, Bénin',
    rating: 4.8,
    reviews: 85,
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=AB',
    banner: 'https://images.unsplash.com/photo-1518998053574-53ee79b17ec1?auto=format&fit=crop&q=80&w=800',
    category: 'Artisanat',
  },
  {
    id: 'm3',
    name: 'Nature d\'Afrique',
    description: 'Produits cosmétiques naturels à base de karité et baobab.',
    location: 'Bamako, Mali',
    rating: 4.7,
    reviews: 210,
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=NA',
    banner: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    category: 'Beauté',
  },
];

export function Merchants() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl font-black tracking-tight">Nos Marchands</h1>
        <p className="text-muted-foreground text-lg">Découvrez les artisans et créateurs qui font vibrer le continent.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_MERCHANTS.map((merchant, index) => (
          <motion.div
            key={merchant.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-40">
                <img 
                  src={merchant.banner} 
                  alt={merchant.name}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <Badge className="absolute top-4 right-4 bg-background/80 text-foreground backdrop-blur-md border-none">
                  {merchant.category}
                </Badge>
              </div>
              <CardContent className="relative pt-12 p-6">
                <Avatar className="absolute -top-10 left-6 h-20 w-20 border-4 border-background shadow-xl">
                  <AvatarImage src={merchant.logo} />
                  <AvatarFallback>{merchant.name[0]}</AvatarFallback>
                </Avatar>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight">{merchant.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      {merchant.location}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {merchant.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm">{merchant.rating}</span>
                      <span className="text-xs text-muted-foreground">({merchant.reviews})</span>
                    </div>
                    <Button variant="ghost" className="text-primary font-bold gap-2 group-hover:translate-x-1 transition-transform">
                      Visiter la boutique <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 p-12 rounded-3xl bg-primary text-primary-foreground text-center space-y-6">
        <h2 className="text-3xl font-black tracking-tight">Vous êtes un artisan ou commerçant ?</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Rejoignez des milliers d'entrepreneurs et commencez à vendre vos produits partout dans le monde.
        </p>
        <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-2xl font-bold shadow-xl">
          Ouvrir ma boutique gratuitement
        </Button>
      </div>
    </div>
  );
}
