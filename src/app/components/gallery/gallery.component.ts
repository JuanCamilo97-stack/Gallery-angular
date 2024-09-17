import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { title: 'Bosque', description: 'Paisaje de bosque frondoso', category: 'bosques', url: 'assets/images/forest/enchanted-forest-sunrise.jpg' },
    { title: 'Bosque poblado', description: 'Atardecer boscoso', category: 'bosques', url: 'assets/images/forest/forest-glade.jpg' },
    { title: 'Plano del bosque', description: 'Panorama boscoso', category: 'bosques', url: 'assets/images/forest/sunny-forest.jpg' },
    { title: 'Pinos', description: 'Bosque poblado de vida ', category: 'bosques', url: 'assets/images/forest/verdant-forest.jpg' },

    { title: 'Desierto', description: 'Paisaje de desierto árido', category: 'desiertos', url: 'assets/images/deserts/desert-dune-beauty.jpg' },
    { title: 'Desierto sin vida', description: 'Desierto de ejipto', category: 'desiertos', url: 'assets/images/deserts/desert-dune.jpg' },
    { title: 'Atardecer', description: 'Hermosos atardecer en el desierto', category: 'desiertos', url: 'assets/images/deserts/desert-sunrise.jpg' },
    { title: 'Oasis', description: 'Oasis lleno de vida', category: 'desiertos', url: 'assets/images/deserts/sunset-desert.jpg' },
    
    { title: 'Nevado', description: 'Paisaje nevado', category: 'nevados', url: 'assets/images/snowy/snowy-mountain.jpg' },
    { title: 'Paraiso de hielo', description: 'Las maravillas del hielo', category: 'nevados', url: 'assets/images/snowy/snowy-owl.jpg' },
    { title: 'Atardecer', description: 'Atardecer magico', category: 'nevados', url: 'assets/images/snowy/snowy-sunset.jpg' },
    { title: 'Vida', description: 'Vida en medio del hielo', category: 'nevados', url: 'assets/images/snowy/snowy-winter.jpg' },

    { title: 'Islas', description: 'Islas llenas de vida', category: 'playas', url: 'assets/images/beaches/island-archipelago.jpg' },
    { title: 'Playa', description: 'Desierto se une con el mar', category: 'playas', url: 'assets/images/beaches/seaside-beach.jpg' },
    { title: 'Mar', description: 'Islas tropicales', category: 'playas', url: 'assets/images/beaches/tropical-parad.jpg' },
    { title: 'Playa', description: 'El mar y la playa uno solo', category: 'playas', url: 'assets/images/beaches/tropical-paradise.jpg' }
  ];

  favoriteImages: any[] = []; 
  selectedCategory: string = 'todos';
  showFavoritesModal: boolean = false; 

  get filteredImages() {
    if (this.selectedCategory === 'todos') {
      return this.images;
    }
    return this.images.filter(image => image.category === this.selectedCategory);
  }

  openFavoritesModal() {
    this.showFavoritesModal = true;
  }

  closeFavoritesModal() {
    this.showFavoritesModal = false;
  }

  toggleFavorite(image: any) {
    const index = this.favoriteImages.indexOf(image);
    if (index === -1) {
      this.favoriteImages.push(image);
    } else {
      this.favoriteImages.splice(index, 1);
    }
  }

  isFavorite(image: any): boolean {
    return this.favoriteImages.includes(image);
  }

  selectImage(image: any) {
    console.log('Imagen seleccionada:', image);
  }
}
