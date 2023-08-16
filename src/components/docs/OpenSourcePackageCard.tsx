import React, { ReactElement } from "react";

import GitHubIcon from "./icons/GitHubIcon";
import NpmIcon from "./icons/NpmIcon";
import PythonIcon from "./icons/PythonIcon";

export type Package = {
  name: string;
  description: string;
  gitHubURL?: string;
  npmPackage?: string;
  pythonPackage?: string;
  hideNpm?: boolean;
};

export default function OpenSourcePackageCard({
  name,
  description,
  gitHubURL,
  hideNpm,
  npmPackage,
  pythonPackage,
}: Package): ReactElement {
  const nameWithoutFoxglovePrefix = name.split("@foxglove/")[1] ?? "";
  return (
    <div className="bg-indigo-50 flex-1 flex-grow-0 flex flex-col content-between rounded-lg shadow my-2 mx-2 divide-y divide-gray-200">
      <div className="h-full px-4">
        <h4 className="m-0 text-gray-900 text-sm font-medium">{name}</h4>
        <p className="text-gray-500 text-sm" style={{ width: "230px" }}>
          {description}
        </p>
      </div>
      <div className="-mt-px flex divide-x divide-gray-200">
        {hideNpm !== true && (
          <div className="w-0 flex-1 flex">
            <a
              href={`https://www.npmjs.com/package/${npmPackage ?? name}`}
              target="_blank"
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              rel="noreferrer"
            >
              <NpmIcon className="h-6 w-6" />
            </a>
          </div>
        )}
        {pythonPackage != undefined && (
          <div className="-ml-px w-0 flex-1 flex">
            <a
              href={`https://pypi.org/project/${pythonPackage}/`}
              target="_blank"
              className="relative w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              rel="noreferrer"
            >
              <PythonIcon className="h-6 w-6" />
            </a>
          </div>
        )}
        <div className="-ml-px w-0 flex-1 flex">
          <a
            href={`https://github.com/foxglove/${gitHubURL ?? nameWithoutFoxglovePrefix}`}
            target="_blank"
            className="relative w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            rel="noreferrer"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
