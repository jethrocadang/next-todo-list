"use client";

import { Button, ButtonProps } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useMediaQuery } from "react-responsive";

interface TagFormProps
  extends Pick<ButtonProps, "variant" | "size" | "asChild"> {
  className?: string;
}

const TagForm = ({ className, variant, size, asChild }: TagFormProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isMobile ? (
        <Drawer>
          <DrawerTrigger asChild>
            <Button className={cn("", className)} variant={variant} size={size}>
              <span className="text-xl">+ &nbsp;</span> New Tag
            </Button>
          </DrawerTrigger>
          <DrawerContent className=" px-5 pb-10 gap-2.5">
            <DrawerHeader>
              <DrawerTitle>Create New Tag</DrawerTitle>
              <DrawerDescription>Add a new tag for your Team</DrawerDescription>
            </DrawerHeader>
            <div>
              <Label>Title</Label>
              <Input />
            </div>
            <Button className="w-full">Create Tag</Button>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button className={cn("", className)} variant={variant} size={size}>
              <span className="text-xl">+ &nbsp;</span> New Tag
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Tag</DialogTitle>
              <DialogDescription>Add a new tag for your Team</DialogDescription>
            </DialogHeader>
            <div>
              <Label>Title</Label>
              <Input />
            </div>
            <Button className="w-full">Create Tag</Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default TagForm;
