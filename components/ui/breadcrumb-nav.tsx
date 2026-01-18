"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumb } from "@/components/voidui";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items?: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname if not provided
  const breadcrumbItems = items || generateBreadcrumbItems(pathname);

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <div className="mb-8">
      <Breadcrumb>
        <Breadcrumb.List>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <Breadcrumb.Item>
                {item.href && index < breadcrumbItems.length - 1 ? (
                  <Breadcrumb.Link href={item.href}>
                    {item.label}
                  </Breadcrumb.Link>
                ) : (
                  <Breadcrumb.Page>{item.label}</Breadcrumb.Page>
                )}
              </Breadcrumb.Item>
              {index < breadcrumbItems.length - 1 && <Breadcrumb.Separator />}
            </React.Fragment>
          ))}
        </Breadcrumb.List>
      </Breadcrumb>
    </div>
  );
}

function generateBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  segments.forEach((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    
    items.push({
      label,
      href: index < segments.length - 1 ? href : undefined
    });
  });

  return items;
}