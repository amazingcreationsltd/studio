import * as React from "react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Debanga Dutta. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
