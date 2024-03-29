import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody, CardFooter, Image} from "@nextui-org/react";


const PCard = (data: { key: React.Key | null | undefined; item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; img: string | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; desc: string | undefined; }) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
      <>
        {/* <Button onPress={onOpen}>{data.title}</Button> */}
        <Card className=" w-44" shadow="sm" key={data.key} isPressable isHoverable onPress={onOpen}>
            <CardBody className="overflow-visible p-0">
                <Image
                shadow="sm"
                radius="lg"
                width="100%"
                // alt={data.title}
                className="w-full object-cover h-[140px]"
                src={data.img}
                />
            </CardBody>
            <CardFooter className="text-small justify-between flex-wrap">
                <b>{data.item}</b>
                <p className="text-default-500">{"💸"+data.price}</p>
            </CardFooter>
        </Card>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{data.item}</ModalHeader>
                <ModalBody>
                  <div className="flex flex-col gap-1 items-center">
                    <div className="flex flex-row w-full justify-around pl-10 pr-10">
                      <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      // alt={data.title}
                      className="w-full object-cover h-[140px]"
                      src={data.img}
                      />
                    </div>
                    <div>
                      <h1 className="font-bold">Price:</h1>
                      <h1>{data.price}</h1>
                      <h1 className="font-bold">Description:</h1>
                      <p>{data.desc}</p>
                    </div>         
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="success" onPress={onClose}>
                    Add to Cart
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
}

export default PCard;

