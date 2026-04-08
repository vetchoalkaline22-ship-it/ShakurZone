import { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Settings, 
  Plus, 
  TrendingUp, 
  Users, 
  DollarSign,
  Search,
  MoreVertical,
  Edit,
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MOCK_ORDERS = [
  { id: 'ORD-001', customer: 'Amadou Diallo', status: 'Payé', amount: '45,000 CFA', date: 'Il y a 2h' },
  { id: 'ORD-002', customer: 'Fatou Sow', status: 'En attente', amount: '12,500 CFA', date: 'Il y a 5h' },
  { id: 'ORD-003', customer: 'Koffi Mensah', status: 'Livré', amount: '8,000 CFA', date: 'Hier' },
  { id: 'ORD-004', customer: 'Zainab Ibrahim', status: 'Payé', amount: '22,000 CFA', date: 'Hier' },
];

const MOCK_INVENTORY = [
  { id: 1, name: 'Boubou en Soie', stock: 12, price: '45,000 CFA', category: 'Mode' },
  { id: 2, name: 'Huile de Baobab', stock: 45, price: '8,500 CFA', category: 'Beauté' },
  { id: 3, name: 'Masque Sculpté', stock: 3, price: '15,000 CFA', category: 'Artisanat' },
  { id: 4, name: 'Sac en Raphia', stock: 8, price: '12,000 CFA', category: 'Accessoires' },
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Tableau de Bord</h1>
          <p className="text-muted-foreground">Bienvenue, Maison de la Soie. Voici l'état de votre boutique.</p>
        </div>
        <Button className="gap-2 rounded-xl shadow-lg shadow-primary/20">
          <Plus className="h-4 w-4" /> Nouveau Produit
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-primary text-primary-foreground border-none shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium opacity-80 uppercase tracking-wider">Ventes Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black">1,245,000 CFA</div>
            <p className="text-xs mt-1 opacity-80 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +12% ce mois
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Commandes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black">48</div>
            <p className="text-xs mt-1 text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +5 aujourd'hui
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Visiteurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black">2,840</div>
            <p className="text-xs mt-1 text-muted-foreground">Visites uniques</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Stock Faible</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-destructive">3</div>
            <p className="text-xs mt-1 text-muted-foreground">Produits à réapprovisionner</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between overflow-x-auto pb-2">
          <TabsList className="bg-muted/50 p-1 rounded-xl">
            <TabsTrigger value="overview" className="rounded-lg gap-2">
              <LayoutDashboard className="h-4 w-4" /> Aperçu
            </TabsTrigger>
            <TabsTrigger value="products" className="rounded-lg gap-2">
              <Package className="h-4 w-4" /> Produits
            </TabsTrigger>
            <TabsTrigger value="orders" className="rounded-lg gap-2">
              <ShoppingBag className="h-4 w-4" /> Commandes
            </TabsTrigger>
            <TabsTrigger value="settings" className="rounded-lg gap-2">
              <Settings className="h-4 w-4" /> Paramètres
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Dernières Commandes</CardTitle>
                  <CardDescription>Vous avez 12 commandes en attente de traitement.</CardDescription>
                </div>
                <Button variant="outline" size="sm">Tout voir</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {MOCK_ORDERS.map((order) => (
                    <div key={order.id} className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10 border">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold">
                            {order.customer.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{order.customer}</p>
                          <p className="text-xs text-muted-foreground">{order.id} • {order.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right hidden sm:block">
                          <p className="font-bold">{order.amount}</p>
                          <Badge variant={order.status === 'Payé' ? 'default' : order.status === 'Livré' ? 'secondary' : 'outline'} className="text-[10px] h-5">
                            {order.status}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
                <CardDescription>Ventes par catégorie ce mois.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Mode</span>
                    <span className="text-muted-foreground">65%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '65%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Artisanat</span>
                    <span className="text-muted-foreground">20%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary/60" style={{ width: '20%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Beauté</span>
                    <span className="text-muted-foreground">15%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary/30" style={{ width: '15%' }} />
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" /> Conseil Pro
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Vos produits de la catégorie "Mode" se vendent mieux le weekend. Pensez à lancer une promotion vendredi soir !
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Inventaire</CardTitle>
                <CardDescription>Gérez vos produits et vos stocks.</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Rechercher..." className="pl-9 w-[200px] h-9 rounded-lg" />
                </div>
                <Button size="sm" className="gap-2">
                  <Plus className="h-4 w-4" /> Ajouter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 border-b">
                    <tr>
                      <th className="text-left p-4 font-bold uppercase tracking-wider text-[10px]">Produit</th>
                      <th className="text-left p-4 font-bold uppercase tracking-wider text-[10px]">Catégorie</th>
                      <th className="text-left p-4 font-bold uppercase tracking-wider text-[10px]">Prix</th>
                      <th className="text-left p-4 font-bold uppercase tracking-wider text-[10px]">Stock</th>
                      <th className="text-right p-4 font-bold uppercase tracking-wider text-[10px]">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {MOCK_INVENTORY.map((item) => (
                      <tr key={item.id} className="hover:bg-muted/30 transition-colors group">
                        <td className="p-4 font-bold">{item.name}</td>
                        <td className="p-4">
                          <Badge variant="outline" className="font-normal">{item.category}</Badge>
                        </td>
                        <td className="p-4">{item.price}</td>
                        <td className="p-4">
                          <span className={item.stock < 10 ? 'text-destructive font-bold' : ''}>
                            {item.stock} unités
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
