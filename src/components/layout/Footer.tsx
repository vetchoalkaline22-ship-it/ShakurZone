import { Store, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Store className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">Avaria</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La destination préférée pour découvrir et acheter le meilleur de l'artisanat et du commerce africain.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Acheter</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer">Explorer</li>
              <li className="hover:text-primary cursor-pointer">Nouveautés</li>
              <li className="hover:text-primary cursor-pointer">Meilleures ventes</li>
              <li className="hover:text-primary cursor-pointer">Promotions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Vendre</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer">Devenir vendeur</li>
              <li className="hover:text-primary cursor-pointer">Tableau de bord</li>
              <li className="hover:text-primary cursor-pointer">Tarifs</li>
              <li className="hover:text-primary cursor-pointer">Guide du vendeur</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer">Centre d'aide</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
              <li className="hover:text-primary cursor-pointer">Livraison</li>
              <li className="hover:text-primary cursor-pointer">Retours</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Avaria. Fait avec ❤️ pour l'Afrique.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span className="hover:text-primary cursor-pointer">Confidentialité</span>
            <span className="hover:text-primary cursor-pointer">Conditions d'utilisation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
