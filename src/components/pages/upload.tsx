"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Dropzone from "../ui/dropzone";

function Upload() {
  return (
    <div className="flex flex-col text-2xl font-bold text-white items-center">
      Faça upload do vídeo!
      <form className="flex flex-col mt-4 justify-center items-center">
        <div className="flex gap-2 items-center">
          <Dropzone />
        </div>
        <div className="mt-2">
          <Button>Enviar</Button>
        </div>
      </form>
    </div>
  );
}

export default Upload;
