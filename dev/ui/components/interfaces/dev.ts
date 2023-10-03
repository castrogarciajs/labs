import * as React from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface NavbarProps extends React.MenuHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface MainProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  shadow?: boolean;
  rounded?: boolean;
}
