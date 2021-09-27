export interface Box{
    isInside:boolean,
    typeBox:TypeBox
}

export enum ColorBox{
    COLOR_BOX_RED,
    COLOR_BOX_GREEN
}

export enum TypeBox{
    INITIAL_BOX,
    NORMAL_BOX,
    FINISHED_BOX
}