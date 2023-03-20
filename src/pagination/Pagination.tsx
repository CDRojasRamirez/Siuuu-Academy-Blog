import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type IPaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: IPaginationProps) => (
  <div className="text-sm flex justify-between">
    {props.previous && (
      <div>
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a className="RecientePasado">← Publicaciones más recientes</a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="text-right ml-auto">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a className="RecientePasado">Publicaciones pasadas →</a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
