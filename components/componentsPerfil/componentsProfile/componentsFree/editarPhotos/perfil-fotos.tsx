"use client";

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { PhotosAPI } from "@/service/photos";

// shadcn
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// drag & drop web
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";



export default function PerfilFotos() {
  const { user } = useContext(AuthContext);
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadPhotos();
  }, []);

  async function loadPhotos() {
    try {
      setLoading(true);
      const res = await PhotosAPI.list(user!.id);
      setPhotos(res.data);
    } catch (err) {
      alert("Erro ao carregar fotos.");
    } finally {
      setLoading(false);
    }
  }

  // -------------------------------
  // UPLOAD WEB NORMAL
  // -------------------------------
  async function addPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const form = new FormData();
      form.append("file", file);

      const res = await PhotosAPI.addOne(user!.id, form);
      setPhotos(prev => [...prev, res.data]);

    } catch (err) {
      alert("Erro ao enviar foto.");
    }
  }

  // -------------------------------
  // DELETE PHOTO
  // -------------------------------
  async function deletePhoto(photoId: string) {
    try {
      await PhotosAPI.remove(photoId);
      setPhotos(prev => prev.filter(p => p.id !== photoId));
    } catch (err) {
      alert("Erro ao excluir.");
    }
  }

  // -------------------------------
  // DRAG & DROP — reorder
  // -------------------------------
  function onDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(photos);
    const [removed] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, removed);

    setPhotos(items);
  }

  // -------------------------------
  // SAVE REORDER
  // -------------------------------
  async function saveOrder() {
    try {
      setSaving(true);

      const body = photos.map((p, index) => ({
        id: p.id,
        position: index + 1,
      }));

      await PhotosAPI.bulk(user!.id, body);
      alert("Ordem salva!");

    } catch (err) {
      alert("Erro ao salvar ordem.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Minhas Fotos</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">

          {/* Botão adicionar */}
          <div>
            <label className="cursor-pointer text-white bg-black px-4 py-2 rounded-md">
              Adicionar foto
              <input
                type="file"
                accept="image/*"
                onChange={addPhoto}
                className="hidden"
              />
            </label>
          </div>

          {/* Lista */}
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="photo-list">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-4"
                  >
                    {photos.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="relative bg-white rounded-lg shadow-sm border p-2"
                          >
                            <img
                              src={`https://botgrupo.lummen-app.com${item.url}`}
                              alt=""
                              className="w-full h-60 object-cover rounded-md"
                            />

                            {/* Delete */}
                            <button
                              onClick={() => deletePhoto(item.id)}
                              className="
                                absolute top-3 right-3 
                                bg-black/60 text-white px-3 py-1 
                                rounded-full text-sm
                              "
                            >
                              X
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}

          {/* Save button */}
          <Button
            className="w-full py-4 text-lg"
            disabled={saving}
            onClick={saveOrder}
          >
            {saving ? "Salvando..." : "Salvar Ordem"}
          </Button>

        </CardContent>
      </Card>
    </div>
  );
}
