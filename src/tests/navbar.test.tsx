import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import for additional matchers like toBeInTheDocument
import Navbar from '../components/navbar'; // Adjust the import path as needed

describe('Navbar Component', () => {
  test('renders the logo', () => {
    render(<Navbar />);
    const logoElement = screen.getByText(/C\.E\./i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders desktop navigation links', () => {
    render(<Navbar />);
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const worksLink = screen.getByText(/Works/i);
    const journeyLink = screen.getByText(/Journey/i);
    const contactLink = screen.getByText(/Contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(worksLink).toBeInTheDocument();
    expect(journeyLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('toggles mobile menu when hamburger icon is clicked', () => {
    render(<Navbar />);

    // Mobile nav shouldn't be initially visible
    expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();

    // Test toggle the mobile nav
    const hamburgerIcon = screen.getByRole('button', { name: /toggle-nav-menu/i });
    fireEvent.click(hamburgerIcon);

    // Check to be sure the mobile nav is visible
    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();

    // Test toggle the mobile nav again
    fireEvent.click(hamburgerIcon);

    // Check to be sure the mobile nav is hidden again
    expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();
  });
});
