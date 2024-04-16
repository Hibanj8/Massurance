import { render, screen } from '@testing-library/react';
import Service from '../app/services/page';  // Assurez-vous que le chemin est correct

describe('Service Component', () => {
  it('renders the component', () => {
    render(<Service />);
    expect(screen.getByText('Nos Offres d\'Assurance')).toBeInTheDocument();
    expect(screen.getByText('Assurance Automobile')).toBeInTheDocument();
  });

  it('should display icons for each service', () => {
    render(<Service />);
    // Utiliser queryAllByRole pour éviter les erreurs si aucun élément n'est trouvé
    expect(screen.queryAllByRole('img').length).toBe(6);  
  });

});
