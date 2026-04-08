import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Globe, Zap, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/shop/ProductCard';

const MOCK_PRODUCTS = [
  {
    id: '1',
    title: 'Boubou en Soie de Dakar',
    price: 45000,
    currency: 'CFA',
    category: 'Mode',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    merchantName: 'Maison de la Soie',
  },
  {
    id: '2',
    title: 'Masque en Bois Sculpté',
    price: 15000,
    currency: 'CFA',
    category: 'Artisanat',
    image: 'https://images.unsplash.com/photo-1518998053574-53ee79b17ec1?auto=format&fit=crop&q=80&w=800',
    merchantName: 'Artisans du Bénin',
  },
  {
    id: '3',
    title: 'Huile de Baobab Pure',
    price: 8500,
    currency: 'CFA',
    category: 'Beauté',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    merchantName: 'Nature d\'Afrique',
  },
  {
    id: '4',
    title: 'Sac en Raphia Tissé',
    price: 12000,
    currency: 'CFA',
    category: 'Accessoires',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800',
    merchantName: 'Tissage Royal',
  },
];

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-pattern-kente -z-10" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left space-y-8"
            >
              <Badge variant="outline" className="px-4 py-1 text-primary border-primary/30 bg-primary/5 rounded-full text-sm font-semibold uppercase tracking-widest">
                L'Afrique à portée de clic
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-balance leading-[1.1]">
                Créez votre boutique <span className="text-primary">100% Africaine</span> en quelques minutes.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Avaria est la plateforme tout-en-un conçue pour les entrepreneurs africains. Vendez localement et internationalement avec nos solutions de paiement adaptées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="h-14 px-8 text-lg rounded-2xl gap-2 shadow-xl shadow-primary/20">
                  Commencer à vendre <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-2xl gap-2">
                  Explorer le marché <ShoppingBag className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold">10k+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Vendeurs</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold">50k+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Produits</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold">24/7</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Support</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
                <img 
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1000" 
                  alt="African Fashion" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-card p-4 rounded-2xl shadow-xl border z-20 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Nouvelle vente !</p>
                    <p className="font-bold">+45,000 CFA</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border z-20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Paiement reçu via</p>
                    <p className="font-bold">Mobile Money</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-black tracking-tight">Découvertes du moment</h2>
              <p className="text-muted-foreground text-lg">Le meilleur de l'artisanat africain sélectionné pour vous.</p>
            </div>
            <Button variant="ghost" className="text-primary font-bold gap-2">
              Voir tout <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-black tracking-tight">Pourquoi choisir Avaria ?</h2>
            <p className="text-muted-foreground text-lg">Une solution pensée par des Africains, pour des Africains.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-card p-8 rounded-3xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Paiements Locaux</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acceptez Orange Money, MTN MoMo, Wave et cartes bancaires locales sans friction.
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Logistique Intégrée</h3>
              <p className="text-muted-foreground leading-relaxed">
                Des partenariats avec des transporteurs locaux pour livrer vos colis partout en Afrique.
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Store className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Zéro Frais Cachés</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un modèle transparent adapté à la réalité des petits commerçants et artisans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
