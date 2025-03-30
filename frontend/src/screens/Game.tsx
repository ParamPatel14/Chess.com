
import { Button } from "../components/Button"
import { ChessBoard } from "../components/ChessBoard"
import { useSocket } from "../hooks/useSocket"

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";
export const Game = () => {
    const socket = useSocket();
    if(!socket) return <div>Connecting..</div>

    return <div className="justify-center flex">
        <div className="pt-8 max-w-screen-lg">
            <div className="grid grid-cols-6 gap-4 w-full">
                <div className="col-span-4 bg-red-200 w-full">
                    <ChessBoard />
                </div>
                <div className="col-span-2 bg-green-200 w-full">
                    <Button onClick={() => {
                        socket.send(JSON.stringify({
                            type: ""
                        }))
                    }}>
                        Play
                    </Button>
                </div>
            </div>

        </div>
    </div>
}