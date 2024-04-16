import { render, screen } from '@testing-library/react';
import Home from '../app/home/page';

describe('Home Component', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    expect(screen.getByText('Bienvenue chez Massurance')).toBeInTheDocument();
    expect(screen.getByText('votre expert en assurance.')).toBeInTheDocument();
  });

  it('displays the main paragraph', () => {
    render(<Home />);
    expect(screen.getByText(/partenaire de confiance depuis plus de 40 ans/)).toBeInTheDocument();
  });

  it('has links to appointment and services pages', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: 'Rendez-vous' })).toHaveAttribute('href', '/rendez-vous');
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services');
  });

  it('renders an image with the correct src', () => {
    render(<Home />);
    const image = screen.getByRole('img', { name: 'hero' });
    expect(image).toHaveAttribute('src', 'https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png');
  });
});
